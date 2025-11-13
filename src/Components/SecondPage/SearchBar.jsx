import React, { useState } from 'react';

const SearchBar = ({ getCity, city, searchCityWeather }) => {

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-xl">
      <input
        name="searchbar"
        className="w-full h-12 pl-5 mt-5 shadow-lg rounded-xl bg-cyan-900 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Search city"
        type="text"
        value={city}
        onChange={getCity}

      />
      <div onClick={searchCityWeather} className="cursor-pointer">
        <h2 className="text-white font-bold text-xl hover:text-blue-300 transition">Enter</h2>
      </div>
    </div>
  );
};

export default SearchBar;
