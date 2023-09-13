import { tastyApiVariables } from "@/utils/tastyApiVariables";
import { axiosRequest } from "@/utils/axiosRequest";

export const getSomeRecipes = (id: string) => {
  const options = {
    method: "GET",
    url: tastyApiVariables.url("list"),
    params: { tags: id },
    headers: tastyApiVariables.headers,
  };

  axiosRequest(options);
};
