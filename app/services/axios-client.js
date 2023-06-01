import axios from "axios";

export const instance = (() => {
  let url = "https://movie-app-backend-02nl.onrender.com/api/";
  if (process.env.ENV === "PROD") {
    const url = "https://movie-app-backend-02nl.onrender.com/api/";
  } else if (process.env.ENV === "DEV") {
    const url = "http://127.0.0.1:5002/api/";
  }
  return axios.create({
    baseURL: url,
    timeout: 10000,
  });
})();
