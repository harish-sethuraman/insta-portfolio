import React from 'react';
import SearchIcon from 'Icons/search';

const Search = () => (
  <div className="search-wrapper">
    <span className="search-icon">
      <SearchIcon />
    </span>
    <input type="text" placeholder="Search" className="search-bar" />
  </div>
);

export default Search;
