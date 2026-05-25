import { Outlet } from "react-router-dom";
import ArabicNavbar from "./ArabicNavbar";
import Footer from "./Footer";

export default function ArabicLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-white dark:bg-neutral-950 transition-colors flex flex-col">
      <ArabicNavbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
