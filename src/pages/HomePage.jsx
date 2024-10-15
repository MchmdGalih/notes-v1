import TopNavbar from "../components/TopNavbar.jsx";
import { getActiveNotes } from "../utils/data";
import NotesList from "../components/NotesList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useSearchParams } from "react-router-dom";
export default function HomePage() {
  const [searchUrl] = useSearchParams();
  const params = searchUrl.get("keyword") || "";

  const result = getActiveNotes().filter((note) =>
    note.title.toLowerCase().includes(params.toLowerCase())
  );

  return (
    <div className="min-w-full">
      <TopNavbar title="Homepage" />
      <SearchBar />

      <h1 className="text-3xl mt-2 font-rubic font-bold px-4 text-left md:text-center">
        All Notes
      </h1>

      <NotesList notes={result} />
    </div>
  );
}
