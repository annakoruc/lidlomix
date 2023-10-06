import {
  NutritionProps,
  RecipeProps,
  recipeIngredientProps,
  shortRecipeProps,
} from "@/types";
import { sponacularApiVariables } from "@/utils/sponacularApiVariables";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type recipeState = {
  loading: boolean;
  randomRecipes: shortRecipeProps[];
  currentRecipe: RecipeProps;
};

const initialState: recipeState = {
  loading: true,
  randomRecipes: [],
  currentRecipe: {
    id: 0,
    name: "",
    image: "",
    prepTime: 0,
    servings: 0,
    instructions: "",
    nutrition: {
      fiber: "",
      protein: "",
      fat: "",
      calories: "",
      sugar: "",
      carbohydrates: "",
    },
    ingredients: [],
  },
};

export const getRandomRecipes = createAsyncThunk(
  "apiRecipes/getRandom",
  async () => {
    const options = {
      method: "GET",
      url: sponacularApiVariables.url("random"),
      params: { apiKey: sponacularApiVariables.key, number: 30 },
    };

    try {
      const response = await axios.request(options);
      //TODO create type for recipe from response
      return response.data.recipes.map((recipe: any) => {
        return {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          prepTime: recipe.readyInMinutes,
          serving: recipe.servings,
        };
      });
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }
);

export const getRecipeById = createAsyncThunk(
  "apiRecipes/byId",
  async (id: number) => {
    const options = {
      method: "GET",
      url: sponacularApiVariables.url(`${id}/information`),
      params: { apiKey: sponacularApiVariables.key, includeNutrition: true },
    };

    try {
      const response = await axios.request(options);
      const recipeFromApi = await response.data;

      const nutrients = (): NutritionProps => {
        const nutriObject: NutritionProps = {
          fiber: "",
          protein: "",
          fat: "",
          calories: "",
          sugar: "",
          carbohydrates: "",
        };

        const neededNutrition = recipeFromApi.nutrition.nutrients.filter(
          (nutrition: { name: string; amount: number; unit: string }) =>
            nutrition.name === "Fiber" ||
            nutrition.name === "Protein" ||
            nutrition.name === "Fat" ||
            nutrition.name === "Calories" ||
            nutrition.name === "Sugar" ||
            nutrition.name === "Carbohydrates"
        );

        neededNutrition.forEach(
          (nutrition: { name: string; amount: number; unit: string }) => {
            // let newKey = nutrition.name.toLowerCase();
            // nutriObject[newKey] = `${nutrition.amount} ${nutrition.unit!}`;
            switch (nutrition.name) {
              case "Fiber":
                nutriObject.fiber = `${nutrition.amount} ${nutrition.unit!}`;
                break;
              case "Protein":
                nutriObject.protein = `${nutrition.amount} ${nutrition.unit!}`;
                break;
              case "Fat":
                nutriObject.fat = `${nutrition.amount} ${nutrition.unit!}`;
                break;
              case "Calories":
                nutriObject.calories = `${nutrition.amount} ${nutrition.unit!}`;
                break;
              case "Sugar":
                nutriObject.sugar = `${nutrition.amount} ${nutrition.unit!}`;
                break;
              case "Carbohydrates":
                nutriObject.carbohydrates = `${
                  nutrition.amount
                } ${nutrition.unit!}`;
                break;
              default:
                // Obsługa nieznanych nazw
                break;
            }
          }
        );

        return nutriObject;
      };

      const ingredients = recipeFromApi.extendedIngredients.map(
        (ingredient: {
          id: string;
          amount: number;
          unit: string;
          original: string;
          name: string;
        }) => {
          return {
            id: ingredient.id,
            amount: ingredient.amount,
            unit: ingredient.unit!,
            displayedText: ingredient.original,
            shortName: ingredient.name,
          };
        }
      );

      return {
        id: recipeFromApi.id,
        name: recipeFromApi.title,
        image: recipeFromApi.image,
        prepTime: recipeFromApi.readyInMinutes,
        servings: recipeFromApi.servings,
        instructions: recipeFromApi.instructions,
        nutrition: nutrients(),
        ingredients: ingredients,
      };
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }
);

//SLICE
const getRecipesFromApiSlice = createSlice({
  name: "apiRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Random Recipe
    builder.addCase(getRandomRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRandomRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.randomRecipes = action.payload;
    });
    builder.addCase(getRandomRecipes.rejected, (state, action) => {
      state.loading = false;
      console.log("rejected", action.error);
    });
    //recipe by ID
    builder.addCase(getRecipeById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecipeById.fulfilled, (state, action) => {
      state.loading = false;

      state.currentRecipe = action.payload!;
    });
    builder.addCase(getRecipeById.rejected, (state, action) => {
      state.loading = false;
      console.log("rejected", action.error);
    });
  },
});

export default getRecipesFromApiSlice.reducer;
