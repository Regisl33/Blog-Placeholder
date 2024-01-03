import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserData(res.data));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPostsData(res.data));
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setCommentsData(res.data));
  }, []);
  return (
    <div className="app">
      <Logo />
      <Navigation />
    </div>
  );
};

export default App;
