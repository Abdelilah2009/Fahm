import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Oeuvres from "./pages/Oeuvres";
import OeuvreDetail from "./pages/OeuvreDetail";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Quizzes from "./pages/Quizzes";
import QuizPlay from "./pages/QuizPlay";
import Flashcards from "./pages/Flashcards";
import Search from "./pages/Search";
import Vocabulaire from "./pages/Vocabulaire";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oeuvres" element={<Oeuvres />} />
          <Route path="/oeuvres/:id" element={<OeuvreDetail />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetail />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quizzes/:id" element={<QuizPlay />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/search" element={<Search />} />
          <Route path="/vocabulaire" element={<Vocabulaire />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
