import React from 'react';

const Stats = () => (
  <div className="my-5 flex justify-between px-10 md:p-0 border border-t-1 border-b-1 md:border-0 lg:border-0 ">
    <div className="md:flex lg:flex">
      {' '}
      <div className="font-semibold mr-1  md:text-base ">
        100
      </div>
      {' '}
      posts
      {' '}
    </div>
    <div className="md:flex lg:flex px-3">
      <div className="font-semibold mr-1 md:text-base ">100m</div>
      {' '}
      followers
    </div>
    <div className="md:flex lg:flex ">
      <div className="font-semibold mr-1 md:text-base ">100m</div>
      {' '}
      following
    </div>
  </div>
);

export default Stats;
