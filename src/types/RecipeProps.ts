import { NutritionProps } from "./NutritionProps";

export interface RecipeProps {
  name: string;
  thumbnail_url: string;
  cook_time_minutes?: number | null;
  prep_time_minutes?: number | null;
  total_time_minutes?: number | null;
  total_time_tier?: { tier: string } | null;
  nutrition?: NutritionProps;
  num_servings?: number;
  instructions: { id: number; position: number; display_text: string }[];
  sections:
    | {
        components:
          | {
              id: number;
              raw_text: string;
              ingredient?: { name: string; id: number };
            }[];
      }[];
}
