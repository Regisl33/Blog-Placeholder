import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink to="./">
          <li>Home</li>
        </NavLink>
        <NavLink to="./feed">
          <li>Feed</li>
        </NavLink>
        <NavLink to="./post">
          <li>Add Post</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
