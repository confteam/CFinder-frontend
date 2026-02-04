import axios from "axios";
import { setupInterceptors } from "./interceptors";

const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL);

export const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  timeout: 5000000
});

setupInterceptors(api);
