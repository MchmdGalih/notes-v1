import { showFormattedDate } from "../utils/data";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function NotesItem({ id, title, body, createdAt }) {
  return (
    <Link
      to={`/note/${id}`}
      className="overflow-hidden p-4 rounded-md  border-2 flex flex-col cursor-pointer shadow-md hover:shadow-lg "
    >
      <article className="p-4 flex-1 font-rubic">
        <h1 className="text-ellipsis overflow-hidden whitespace-nowrap mb-2 text-xl font-rubic font-bold">
          {title}
        </h1>

        <p className="text-xs font-rubic font-light mb-2">
          {showFormattedDate(createdAt)}
        </p>
        <p className="text-xs md:text-sm font-rubic font-medium">{body}</p>
      </article>
    </Link>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
