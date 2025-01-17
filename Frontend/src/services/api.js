import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_BASE_URL }); 

// User Submission
export const submitUserData = (formData) => API.post("/users/submit", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});

// Fetch all users
export const fetchAllUsers = () => API.get("/users");
