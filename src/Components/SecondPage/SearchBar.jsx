import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ variant = "md" }) => {
  const position = variant === "md" ? "absolute top-90 left-1/2 -translate-x-1/2" : "absolute top-70 left-1/2 -translate-x-1/2";
  
  return (
    <div>
      <div>
        <div className= "flex justify-between m-3 pt-3">
          <input
            name="searchbar"
            className="w-[270px] h-45px pl-5 shadow-lg rounded-xl bg-cyan-900"
            placeholder="Search city"
            type="text"
          />
          <div>
            <h2 className="text-white font-bold">Cancel</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
