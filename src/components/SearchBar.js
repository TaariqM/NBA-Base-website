import React from "react";

const SearchBar = ({ search, handleChange, placeholder }) => {
  return (
    <input
      value={search}
      onChange={handleChange}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
