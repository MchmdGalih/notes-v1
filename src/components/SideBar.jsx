import { useState } from "react";
import {
  BiChevronLeftCircle,
  BiChevronRightCircle,
  BiPlusCircle,
  BiHomeCircle,
  BiArchiveOut,
  BiDetail,
} from "react-icons/bi";
import NavigationItem from "./NavigationItem.jsx";
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className="min-h-screen">
      <nav className="h-full flex flex-col bg-white border-r-[1px] border-gray-400 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center ">
          <h1
            className={`overflow-hidden transition-all font-rubic text-xl md:text-xl text-nowrap font-semibold ${
              isOpen ? "md:w-32 " : "w-0"
            }`}
          >
            Daily Notes
          </h1>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <BiChevronLeftCircle size={20} color="teal" />
            ) : (
              <BiChevronRightCircle size={20} color="teal" />
            )}
          </button>
        </div>

        <span className="border-0 border-b-[1px] border-gray-400 mb-2"></span>

        <ul className="flex-1 px-3">
          <NavigationItem
            isOpen={isOpen}
            text={"Add Note"}
            icon={<BiPlusCircle size={20} />}
            path="/add"
          />
          <NavigationItem
            isOpen={isOpen}
            text={"Home"}
            icon={<BiHomeCircle size={20} />}
            path="/"
          />
          <NavigationItem
            isOpen={isOpen}
            text={"Archive"}
            icon={<BiArchiveOut size={20} />}
            path="/archive"
          />
          <NavigationItem
            isOpen={isOpen}
            text={"Detail Note"}
            icon={<BiDetail size={20} />}
            path="/note/:id"
          />
        </ul>
      </nav>
    </aside>
  );
}
