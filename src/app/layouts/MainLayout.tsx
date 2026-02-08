import { Logo } from "@/widgets/Logo";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-secondBg text-txt">
      <div className="container pt-2">
        <div className="flex justify-center items-center">
          <Logo />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
