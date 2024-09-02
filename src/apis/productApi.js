import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

console.log("Base URL:", baseUrl);

const productApi = async (endpoint, method) => {
  let data = [];
  try {
    if (method === "get") {
      const result = await axios.get(`${baseUrl}/${endpoint}`);
      data = result;
    }
    return data;
  } catch (error) {
    throw new error();
  }
};

export { productApi };
