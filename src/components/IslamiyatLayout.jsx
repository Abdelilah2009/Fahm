import { Outlet } from "react-router-dom";
import IslamiyatNavbar from "./IslamiyatNavbar";
import Footer from "./Footer";

export default function IslamiyatLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-white dark:bg-neutral-950 transition-colors flex flex-col">
      <IslamiyatNavbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
