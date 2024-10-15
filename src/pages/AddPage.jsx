import Form from "../components/Form.jsx";
import TopNavbar from "../components/TopNavbar.jsx";
export default function AddPage() {
  return (
    <div className="min-w-full flex flex-col">
      <TopNavbar title="AddPage" />

      <main className="mt-4 max-w-[800px] w-full mx-auto">
        <h1 className="text-center text-3xl  font-semibold font-rubic mb-2">
          Create a new note!
        </h1>
        <Form />
      </main>
    </div>
  );
}
