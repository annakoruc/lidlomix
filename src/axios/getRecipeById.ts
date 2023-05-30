import { axiosRequest } from "@/utils/axiosRequest";

export const getRepiceById = (id: string) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "d44df5084amshc164abfeabc66ebp100f9djsn8cf6d7f559ca",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  axiosRequest(options);
};
