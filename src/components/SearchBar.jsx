import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <form className="flex">
            <input type="text" name="search" id="" placeholder="Search Product " className="border-black p-[11px] rounded-l-md border border-r-0 " />
            <button className="btn btn-outline rounded-l-none bg-slate-200"><FaSearch /></button>
        </form>
    );
};

export default SearchBar;