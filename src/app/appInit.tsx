import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const tg = Telegram.WebApp;

export function AppInit() {
  useEffect(() => {
    tg.ready();
  }, [])

  return <RouterProvider router={router} />
}
