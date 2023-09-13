import { tastyApiVariables } from "@/utils/tastyApiVariables";
import { axiosRequest } from "@/utils/axiosRequest";

export const getRecipeByName = (search: string) => {
  const options = {
    method: "GET",
    url: tastyApiVariables.url("auto-complete"),
    params: {
      prefix: search,
    },
    headers: tastyApiVariables.headers,
  };

  axiosRequest(options);
};
