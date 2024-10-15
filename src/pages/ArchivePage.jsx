import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/data.js";
import TopNavbar from "../components/TopNavbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import NotesList from "../components/NotesList.jsx";
export default function ArchivePage() {
  const [searchUrl] = useSearchParams();
  const params = searchUrl.get("keyword") || "";
  const notes = getArchivedNotes();

  const result = notes.filter((note) =>
    note.title.toLowerCase().includes(params.toLowerCase())
  );

  return (
    <div className="min-w-full">
      <TopNavbar title="ArchivePage" />
      <SearchBar />

      <h1 className="text-3xl mt-2 font-rubic font-bold px-4 text-left md:text-center">
        Archived Notes
      </h1>

      <NotesList notes={result} />
    </div>
  );
}
