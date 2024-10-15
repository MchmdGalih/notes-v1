import { Link, useParams, useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar.jsx";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/data.js";
import { showFormattedDate } from "../utils/data.js";
import {
  BiArchiveIn,
  BiArchiveOut,
  BiArrowBack,
  BiEdit,
  BiTrash,
} from "react-icons/bi";

export default function DetailNotePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const note = getNote(id);

  const onArchive = () => {
    if (note.archived) {
      unarchiveNote(id);
      navigate("/");
    } else {
      archiveNote(id);
      navigate("/archive");
    }
  };
  const onDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <section className="h-screen">
      <TopNavbar title={"Detail Page"} />

      <main className="w-[90%] mx-auto mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Link to="/">
            <BiArrowBack size={30} color="teal" />
          </Link>
          <h2 className="text-2xl font-rubic font-bold"> Back</h2>
        </div>
        {note ? (
          <div className="p-4 rounded-md border-2 flex flex-col">
            <h1 className="text-3xl font-rubic font-bold">{note.title}</h1>
            <p className="text-xs font-rubic font-light mb-2">
              {showFormattedDate(note.createdAt)}
            </p>
            <p className="text-xs md:text-sm font-rubic font-medium">
              {note.body}
            </p>
            <div className="flex gap-4 absolute bottom-10 right-10">
              <button>
                {note.archived ? (
                  <BiArchiveIn size={30} color="teal" onClick={onArchive} />
                ) : (
                  <BiArchiveOut size={30} color="teal" onClick={onArchive} />
                )}
              </button>
              <Link to={`/edit/${id}`}>
                <BiEdit size={30} color="teal" />
              </Link>
              <button>
                <BiTrash size={30} color="teal" onClick={onDelete} />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-md border-2 flex flex-col items-center">
            <p className="text-xl font-rubic font-bold text-center text-gray-500">
              Nothing found!
            </p>
          </div>
        )}
      </main>
    </section>
  );
}
