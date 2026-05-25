import { Outlet } from "react-router-dom";
import IjtimaaiyatNavbar from "./IjtimaaiyatNavbar";

export default function IjtimaaiyatLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <IjtimaaiyatNavbar />
      <Outlet />
    </div>
  );
}
