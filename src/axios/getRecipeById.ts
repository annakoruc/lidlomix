import { axiosRequest } from "@/utils/axiosRequest";

export const getRepiceById = (id: string) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TASTY_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axiosRequest(options);
};
