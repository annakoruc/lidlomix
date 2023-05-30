import { axiosRequest } from "@/utils/axiosRequest";

export const getRecipeByName = (search: string) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
    params: {
      prefix: search,
    },
    headers: {
      "X-RapidAPI-Key": "d44df5084amshc164abfeabc66ebp100f9djsn8cf6d7f559ca",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axiosRequest(options);
};
