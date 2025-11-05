

const SearchBar = ({ onEnterClick }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <input
        name="searchbar"
        className="w-[270px] md:w-[400px] h-12 pl-5 mt-5 shadow-lg rounded-xl bg-cyan-900 text-white placeholder-gray-300"
        placeholder="Search city"
        type="text"
      />
      <div onClick={onEnterClick} className="cursor-pointer">
        <h2 className="text-white font-bold text-xl">Enter</h2>
      </div>
    </div>
  );
};

export default SearchBar;
