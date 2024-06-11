import axios from "./axiosConfig";
const loginUser = async (data, navigate) => {
  try {
    const response = await axios.post("/auth/login", {
      username: data.email,
      password: data.password,
      expiresInMins: 30,
    });

    localStorage.setItem("fakeUser", JSON.stringify(response.data));
    navigate("/profile");

    return response;
  } catch (error) {
    return error;
  }
};

const getAllProducts = async () => {
  try {
    const response = await axios.get("/products?limit=10");
    return response.data;
  } catch (error) {
    return error;
  }
};

const getProductDeyailsById = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { loginUser, getAllProducts, getProductDeyailsById };

// get  post patch put delete
