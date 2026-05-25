import { Outlet } from "react-router-dom";
import IjtimaaiyatNavbar from "./IjtimaaiyatNavbar";
import Footer from "./Footer";

export default function IjtimaaiyatLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-white dark:bg-neutral-950 transition-colors flex flex-col">
      <IjtimaaiyatNavbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
