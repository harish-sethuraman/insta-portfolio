import React, { useState, useEffect } from 'react';
import Header from 'Components/header';
import TopNav from 'Components/topnav';
import Posts from 'Components/posts';
import NoTags from 'Components/notags';
import { TagIcon } from 'Icons/icons';
import data from '../../data';

const Home = ({ insideBigSur }) => {
  const [PostsData, setPosts] = useState(['loading']);
  const [views, setViews] = useState('posts');

  useEffect(() => {
    if (!insideBigSur) {
      import('../../style.css');
    }
    const posts2DArray = [];
    const { posts } = data;
    let count = 4;
    while (count--) {
      posts2DArray.push(posts.splice(0, 3));
    }
    setPosts(posts2DArray);
  }, []);
  return (
    <>
      <TopNav />
      <div className="contents">
        <Header />
        {/* <Selector/> */}
        <div className="selector-holder">
          <div
            className={`selector-wrap ${views === 'posts' ? 'active' : ''}`}
            onClick={() => setViews('posts')}
          >
            <svg height="24" viewBox="0 0 48 48" width="24">
              <path
                clipRule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fillRule="evenodd"
              />
            </svg>
            <div className="mobile-dn">POSTS</div>
          </div>
          <div
            className={`selector-wrap ${views === 'tags' ? 'active' : ''}`}
            onClick={() => setViews('tags')}
          >
            <TagIcon />
            <div className="mobile-dn">TAGGED</div>
          </div>
        </div>
        {views === 'posts' ? <Posts PostsData={PostsData} /> : <NoTags />}
      </div>
    </>
  );
};

export default Home;
