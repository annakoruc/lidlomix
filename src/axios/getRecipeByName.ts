import { axiosRequest } from "@/utils/axiosRequest";

export const getRecipeByName = (search: string) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
    params: {
      prefix: search,
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TASTY_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axiosRequest(options);
};
