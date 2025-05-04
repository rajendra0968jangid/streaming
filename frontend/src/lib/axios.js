import axios from "axios";
const Url = import.meta.env.VITE_URL;
console.log(Url);

const BASE_URL = import.meta.env.MODE === "development" ? Url : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
