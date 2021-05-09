import React from 'react';
import Name from 'Components/name';
import Stats from 'Components/stats';
import InstaDp from 'Images/instadp.jpeg';
import ImageLazy from 'Components/image-lazy';

const Header = () => (
  <div className="header-wrapper">
    <div className="">
      <div className="flex mobile-header ">
        <div className="dp-holder">
          <ImageLazy
            alt="user display "
            classNames="user-dp"
            source={InstaDp}
          />
        </div>
        <div className="user-details">
          <div className="user-name">
            <Name />
          </div>
          <div className="user-stats">
            <Stats />
          </div>
          <div className="user-description description">
            <p className="user-strong-name">Frontend wizard</p>
            <p>Trying to do magic with CSS</p>
            <p>Does understand React a bit and can write in Ember JS as well</p>
            <p>I've always wanted to use that spell.</p>
            <p>Writes sites, packages and fixes code.</p>
          </div>
        </div>
      </div>
      <div className="mobile-description">
        <div className="description">
        <p className="user-strong-name">Frontend wizard</p>
            <p>Trying to do magic with CSS</p>
            <p>Does understand React a bit and can write in Ember JS as well</p>
            <p>I've always wanted to use that spell.</p>
            <p>Writes sites, packages and fixes code.</p>
        </div>
      </div>
      <div className="mobile-user-stats">
        <div className="mobile-stats">
          <div className="stats-bold">12</div>
          posts
        </div>
        <div className="mobile-stats  stats-mid">
          <div className="stats-bold">464</div>
          followers
        </div>
        <div className="mobile-stats">
          <div className="stats-bold">1044</div>
          following
        </div>
      </div>
    </div>
  </div>
);

export default Header;
