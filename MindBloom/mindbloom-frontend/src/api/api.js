import axios from "axios"; // to send http request from react to backend
//all API requests will automatically be prefixed with http://localhost:5000/api, so we don’t have to write the full URL every time.
//created an instance of axios
//ex: A request to /auth/register will actually be sent to http://localhost:5000/api/auth/register
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// User Registration
// sends a POST request to /auth/register (which is http://localhost:5000/api/auth/register).
export const registerUser = (userData) => API.post("/auth/register", userData);

// User Login
export const loginUser = async (userData) => {
    try {
        const response = await API.post("/auth/login", userData);
        localStorage.setItem("authToken", response.data.token);
        return response.data;
    } catch (error) {
        console.error("Login failed", error.response.data);
        return null;
    }
};

export default API;