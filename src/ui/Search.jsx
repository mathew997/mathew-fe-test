import React from "react";
import { SearchIcon } from "../lib/icon";

const Search = () => {
  return (
    <div className="gap-3 items-center bg-[#443158] py-2.5 px-3.5 rounded-3xl hidden lg:flex">
      <span className="text-[#DAD2D8]">
        <SearchIcon />
      </span>
      <input type="search" className="text-xl" placeholder="Search" />
    </div>
  );
};

export default Search;
