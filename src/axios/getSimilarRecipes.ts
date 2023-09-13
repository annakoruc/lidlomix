import { tastyApiVariables } from "@/utils/tastyApiVariables";
import { axiosRequest } from "@/utils/axiosRequest";

export const getSimilarRecipes = (id: string) => {
  const options = {
    method: "GET",
    url: tastyApiVariables.url("list-similarities"),
    params: { recipe_id: id },
    headers: tastyApiVariables.headers,
  };

  axiosRequest(options);
};
