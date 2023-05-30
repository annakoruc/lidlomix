import { tastyApiVariables } from "@/utils/TastyApiVariables";
import { axiosRequest } from "@/utils/axiosRequest";

export const getRepiceById = (id: string) => {
  const options = {
    method: "GET",
    url: tastyApiVariables.url("get-more-info"),
    params: { id: id },
    headers: tastyApiVariables.headers,
  };

  axiosRequest(options);
};
