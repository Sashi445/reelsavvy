import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.MODE === "PROD"
      ? "https://movie-app-backend-02nl.onrender.com/api"
      : "http://127.0.0.1:5002/api/",
  timeout: 1000,
});
