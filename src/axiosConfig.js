import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: { "Content-Type": "application/json" },
});

// export const post = async (url, data) => {
//   const res = await axiosInstance.post(url, data);
//   return res;
// };

export default axiosInstance;
