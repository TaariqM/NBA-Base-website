// eslint-disable-next-line
import React, { useRef, useEffect, forwardRef } from "react";

const SearchBar = forwardRef(
  ({ search, handleChange, handleSubmit, placeholder }, ref) => {
    //whenever you want to pass the prop 'ref' into some component, you will not be able to call it ref without making the component a forwardRef component
    // const handleClickAway = (e) => {if(!ref.current.contains(e.target))}
    // useEffect(() => {
    //   if(!ref.current.contains(e.target))
    // })
    return (
      <form onSubmit={handleSubmit} ref={ref}>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
        />
      </form>
    );
  }
);

export default SearchBar;
