import TopNavbar from "../components/TopNavbar";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/data";
import EditBookInput from "../components/EditBookInput";
export default function EditPage() {
  const { id } = useParams();

  const notes = getNote(id);

  return (
    <section className="min-h-screen">
      <TopNavbar title="EditPage" />

      <main className="mt-4 max-w-[800px] w-full mx-auto">
        <h1 className="text-center text-3xl  font-semibold font-rubic mb-2">
          Edit Note
        </h1>
        <EditBookInput {...notes} />
      </main>
    </section>
  );
}
