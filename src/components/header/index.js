import React from "react";
import Name from "Components/name";
import Stats from "Components/stats";

const Header = () => (
  <div className="header-wrapper">
    <div className="">
      <div className="flex mobile-header ">
        <div className="dp-holder">
          <img
            className="user-dp"
            src="https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/90037111_914867012277305_4337845844301578240_n.jpg?tp=1&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=Lg4BzxdS-XgAX9zkIw2&edm=ABfd0MgAAAAA&ccb=7-4&oh=0efc75d02299b0e8d44b69e4544c7c1f&oe=60AAC272&_nc_sid=7bff83"
          />
        </div>
        <div className="user-details">
          <div className="user-name">
            <Name />
          </div>
          <div className="user-stats">
            <Stats />
          </div>
          <div className="user-description">
            <p className="user-strong-name">Frontend wizard</p>
            <p>Doing magic with CSS</p>
            <p>Harish Kumar</p>
            <p>Harish Kumar</p>
            <p>Harish Kumar</p>
          </div>
        </div>
      </div>
      <div className="mobile-description">
        <div className="">
          <h1 className="user-strong-name">Frontend wizard</h1>
          <p>Doing magic with CSS</p>
          <p>Harish Kumar</p>
          <p>Harish Kumar</p>
          <p>Harish Kumar</p>
        </div>
      </div>
      <div className="mobile-user-stats">
        <div className="mobile-stats">
          <div className="stats-bold">100</div>
          posts
        </div>
        <div className="mobile-stats  stats-mid">
          <div className="stats-bold">100m</div>
          followers
        </div>
        <div className="mobile-stats">
          <div className="stats-bold">100m</div>
          following
        </div>
      </div>
    </div>
  </div>
);

export default Header;
