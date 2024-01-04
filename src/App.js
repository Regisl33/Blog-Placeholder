import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import AddPost from "./Components/AddPost";

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
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home data={userData} />} />
          <Route
            path="/feed"
            element={<Feed postsData={postsData} commentsData={commentsData} />}
          />
          <Route path="/post" element={<AddPost data={userData} />} />
          <Route path="*" element={<Home data={userData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
