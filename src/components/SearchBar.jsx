import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchUrl, setSearchUrl] = useSearchParams();
  const params = searchUrl.get("keyword") || "";

  return (
    <div className="p-2 flex md:w-[800px] relative m-auto  mt-4">
      <input
        value={params}
        onChange={(e) => setSearchUrl({ keyword: e.target.value })}
        type="text"
        placeholder="Search..."
        className=" w-full p-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      />
      <BiSearch
        size={20}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2  "
      />
    </div>
  );
}
