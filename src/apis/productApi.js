import axios from "axios";

const productApi = async (endpoint, method) => {
  let data = [];
  try {
    if (method === "get") {
      const result = await axios.get(endpoint);
      data = result;
    }
    return data;
  } catch (error) {
    console.log("API Error: ", error);
  }
};

export { productApi };
