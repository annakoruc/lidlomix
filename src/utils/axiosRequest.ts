import axios from "axios";

export const axiosRequest = async (options: Object) => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};
