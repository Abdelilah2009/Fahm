import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDarkMode } from "../hooks/useDarkMode";

export default function FrancaisLayout() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors flex flex-col">
      <Navbar dark={dark} setDark={setDark} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
