import { Routes, Route } from "react-router-dom";
import Quiz from "../components/Quiz";
import Start from "../components/Start";
import Score from "../components/Score";
import NotPage from "../components/NotPage";
import Message from "../components/Message";
import Ranking from "../components/Ranking";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
        <Route path="/message" element={<Message />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </>
  );
}
