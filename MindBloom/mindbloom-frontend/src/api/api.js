import axios from "axios"; // To send HTTP requests from React to backend

// All API requests will automatically be prefixed with http://localhost:5000/api
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// User Registration
export const registerUser = (userData) => API.post("/auth/register", userData);

// User Login (Fixed error handling)
export const loginUser = async (userData) => {
    try {
        const response = await API.post("/auth/login", userData);
        localStorage.setItem("authToken", response.data.token); // Store token in local storage
        return response.data;
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error; // Throw error to be caught in Login.js
    }
};

export default API;
