import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink className="link" to="./">
          <li>Home</li>
        </NavLink>
        <NavLink className="link" to="./feed">
          <li>Feed</li>
        </NavLink>
        <NavLink className="link" to="./post">
          <li>Add Post</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
