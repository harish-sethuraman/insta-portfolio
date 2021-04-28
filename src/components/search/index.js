import React from 'react';
import SearchIcon from 'Icons/search';

const Search = () => (
  <div className="relative hidden md:flex flex-wrap items-stretch mb-3 w-1/4">
    <span className="z-10 h-6 absolute text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-4 py-3.5">
      <SearchIcon />
    </span>
    <input type="text" placeholder="Search" className=" h-7 px-2 my-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-50 rounded text-sm border  border-2 border-gray-300 w-full pl-8 ml-1" />
  </div>
);

export default Search;
