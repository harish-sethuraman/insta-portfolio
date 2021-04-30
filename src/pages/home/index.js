import React, { useState, useEffect } from "react";
import Header from "Components/header";
import TopNav from "Components/topnav";
import Posts from "Components/posts";

const Home = () => {
  const [PostsData, setPosts] = useState(["loading"]);
  useEffect(() => {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((response) => {
        let posts2DArray = [],
          posts = response.posts;
        let count = 3;
        while (count--) {
          posts2DArray.push(posts.splice(0, 3));
        }
        setPosts(posts2DArray);
      });
  }, []);
  return (
    <>
      <TopNav />
      <div className="contents">
        <Header />
        {/* <Selector/> */}
      
       <Posts PostsData={PostsData}/>
      </div>
    </>
  );
};

export default Home;
