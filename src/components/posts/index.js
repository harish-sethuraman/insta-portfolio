import React from 'react';
import Post from 'Components/post';

const Posts = ({ PostsData }) => (
  <div className="posts">
    {PostsData.map((postCollection, index) => (
      <div className="posts-row" key={index}>
        {Array.isArray(postCollection)
            && postCollection.map((post) => (
              <Post
                title={post.title}
                description={post.description}
                key={post.title}
              />
            ))}
      </div>
    ))}
  </div>
);

export default Posts;
