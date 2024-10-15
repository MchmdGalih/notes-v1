import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { editNote } from "../utils/data";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function EditBookInput({ id, title, body }) {
  const [formData, setFormData] = useState({
    id: id,
    title: title,
    body: body,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-3 gap-5">
      <input
        type="text"
        className="w-full p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        value={formData.title}
      />
      <textarea
        cols="30"
        rows="10"
        className="resize-none w-full p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        placeholder="Take a note..."
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        value={formData.body}
      ></textarea>

      <button
        type="submit"
        className="absolute right-4 bottom-6 border-2 rounded-full  p-2  "
      >
        <BiPencil size={36} color="teal" />
      </button>
    </form>
  );
}
