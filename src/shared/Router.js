import { Routes, Route } from "react-router-dom";
import Quiz from "../components/Quiz";
import Start from "../components/Start";
import Score from "../components/Score";
import NotPage from "../components/NotPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </>
  );
}
