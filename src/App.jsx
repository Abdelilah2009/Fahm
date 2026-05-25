import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import FrancaisLayout from "./components/FrancaisLayout";
import IjtimaaiyatLayout from "./components/IjtimaaiyatLayout";
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
import IjtimaaiyatHome from "./pages/IjtimaaiyatHome";
import IjtimaaiyatDetail from "./pages/IjtimaaiyatDetail";
import IjtimaaiyatQuizzes from "./pages/IjtimaaiyatQuizzes";
import IjtimaaiyatQuizPlay from "./pages/IjtimaaiyatQuizPlay";
import Mafahim from "./pages/Mafahim";
import Tawariikh from "./pages/Tawariikh";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing — subject selector */}
        <Route path="/" element={<Landing />} />

        {/* French section */}
        <Route path="/francais" element={<FrancaisLayout />}>
          <Route index element={<Home />} />
          <Route path="oeuvres" element={<Oeuvres />} />
          <Route path="oeuvres/:id" element={<OeuvreDetail />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lessons/:id" element={<LessonDetail />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="quizzes/:id" element={<QuizPlay />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="search" element={<Search />} />
          <Route path="vocabulaire" element={<Vocabulaire />} />
        </Route>

        {/* Ijtimaaiyat section */}
        <Route path="/ijtimaaiyat" element={<IjtimaaiyatLayout />}>
          <Route index element={<IjtimaaiyatHome />} />
          <Route path="tarikh/:id" element={<IjtimaaiyatDetail />} />
          <Route path="joghrafia/:id" element={<IjtimaaiyatDetail />} />
          <Route path="mafahim" element={<Mafahim />} />
          <Route path="tawariikh" element={<Tawariikh />} />
          <Route path="quiz" element={<IjtimaaiyatQuizzes />} />
          <Route path="quiz/:id" element={<IjtimaaiyatQuizPlay />} />
        </Route>

        {/* Coming soon */}
        <Route path="/islamiyat" element={<ComingSoon subject="التربية الإسلامية" emoji="🕌" />} />
        <Route path="/arabic" element={<ComingSoon subject="اللغة العربية" emoji="✍️" />} />
      </Routes>
    </BrowserRouter>
  );
}
