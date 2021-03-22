import React from "react";

import "./search-box.styles.css";
// Function components dont have access to state because they don't have access to the constructor method on Component
// Function components also don't have access to lifecycle methods
// A functional component is just there to get some props and render some HTML
// So if you don't need internal state or lifecycle methods, use functional components
// Also, we dont have to pass props, we can destructure the props so we don't have to use props.x or y in the function
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
