import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-tgBg text-tgTxt">
      <div className="container pt-2">
        <Outlet />
      </div>
    </div>
  );
}
