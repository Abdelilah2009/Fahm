import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDarkMode } from "../hooks/useDarkMode";

export default function FrancaisLayout() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <Navbar dark={dark} setDark={setDark} />
      <Outlet />
    </div>
  );
}
