import type { AxiosInstance } from "axios";

export function setupInterceptors(api: AxiosInstance) {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("API Error: ", error);
      return Promise.reject(error);
    }
  )
}
