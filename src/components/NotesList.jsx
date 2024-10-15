import NotesItem from "./NotesItem";
import PropTypes from "prop-types";
export default function NotesList({ notes }) {
  return (
    <div className="md:mt-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4">
      {notes.length ? (
        notes.map((note) => <NotesItem key={note.id} {...note} />)
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};
