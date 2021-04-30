import React from "react";
import Post from "Components/post";
const Posts = ({PostsData}) => {
  return <div className="posts">
    {PostsData.map((postCollection) => (
      <div className="posts-row">
        {Array.isArray(postCollection) && postCollection.map((post) => {
          console.log(post)
          return <Post imageURL={post} />
        }
        )}
      </div>
    ))}
  </div>
};

export default Posts;
