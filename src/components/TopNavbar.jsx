import PropTypes from "prop-types";

export default function TopNavbar({ title }) {
  return (
    <div className=" p-3 md:p-2.5 shadow-sm border-0 border-b-[1px] border-gray-400">
      <h1 className="px-2 text-3xl font-rubic font-bold ">{title}</h1>
    </div>
  );
}

TopNavbar.propTypes = {
  title: PropTypes.string.isRequired,
};
