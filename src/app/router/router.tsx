import { createBrowserRouter } from "react-router-dom";
import { SearchPage } from "@/pages/search";
import { MainLayout } from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <SearchPage />
      }
    ]
  }
])
