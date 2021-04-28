import React from "react";
import Post from "Components/post";
const Posts = () => {
  return (
    <div className="w-full md:flex md:justify-around">
      <div className="posts w-full flex flex-wrap md:px-10"> {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
        <Post key={Math.random()}/>
      ))}
      </div>
    </div>
  );
};

export default Posts;
