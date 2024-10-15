import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function NavigationItem({ isOpen, text, icon, path }) {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer transition-group font-rubic rounded-md ${
        isOpen
          ? "bg-gradient-to-tr from-gray-50 to-gray-100 "
          : "hover:bg-gray-50 text-teal-500"
      }`}
    >
      <Link className="text-teal-500" to={path}>
        {icon}
      </Link>
      <Link
        to={path}
        className={`overflow-hidden text-nowrap transition-all  ${
          isOpen ? "w-32 ml-2" : "w-0 "
        }`}
      >
        {text}
      </Link>

      {!isOpen && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

NavigationItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
