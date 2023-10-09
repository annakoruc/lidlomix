import { NutritionProps } from "./NutritionProps";
import { recipeIngredientProps } from "./RecipeIngredientProps";

export interface RecipeProps {
  id: number;
  name: string;
  image: string;
  prepTime: number;
  servings: number;
  instructions: string;
  nutrition: NutritionProps;
  ingredients: recipeIngredientProps[];
}
