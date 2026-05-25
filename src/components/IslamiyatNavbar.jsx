import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, HelpCircle, Moon, Sun, ArrowLeft } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const navItems = [
  { path: "/islamiyat", label: "الرئيسية", icon: Home, exact: true },
  { path: "/islamiyat/mafahim", label: "المفاهيم", icon: BookOpen },
  { path: "/islamiyat/quiz", label: "اختبارات", icon: HelpCircle },
];

export default function IslamiyatNavbar() {
  const [dark, setDark] = useDarkMode();
  const location = useLocation();

  return (
    <nav dir="rtl" className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/islamiyat" className="flex items-center gap-2 no-underline">
              <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">فهم</span>
              <span className="text-[10px] font-medium text-gray-400 dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">إسلاميات</span>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-1">
              {navItems.map(({ path, label, icon: Icon, exact }) => {
                const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
                return (
                  <Link key={path} to={path} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${isActive ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-neutral-800/50"}`}>
                    <Icon size={16} />
                    {label}
                  </Link>
                );
              })}
            </div>
            <div className="flex sm:hidden items-center gap-0.5">
              {navItems.map(({ path, icon: Icon, exact }) => {
                const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
                return (
                  <Link key={path} to={path} className={`p-2 rounded-lg no-underline transition-colors ${isActive ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-gray-100"}`}>
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
            <div className="w-px h-5 bg-gray-200 dark:bg-neutral-800 mx-1" />
            <Link to="/" className="p-2 rounded-lg text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors no-underline" title="العودة للمواد">
              <ArrowLeft size={18} />
            </Link>
            <button onClick={() => setDark(!dark)} className="p-2 rounded-lg text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer bg-transparent border-0" aria-label="الوضع الليلي">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
