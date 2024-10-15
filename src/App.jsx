import "./index.css";
import SideBar from "./components/SideBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";
import DetailNotePage from "./pages/DetailNotePage.jsx";
import NoteFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <div className="max-w-full flex">
      <SideBar />

      <main className="flex-1 ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/note/:id" element={<DetailNotePage />} />
          <Route path="/*" element={<NoteFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
