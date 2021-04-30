import React from 'react'
import HomeIcon from "Icons/home";
import MessageIcon from "Icons/message";
import ExploreIcon from "Icons/explore";
import HeartIcon from "Icons/heart";
import Search from 'Components/search'
import "./index.css";

const TopNav = () => {
  return <div className="navbar-wrapper">
    <div className="navbar">
      <div className="site-icon-holder">
        <img
          className="site-icon"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
        />
      </div>
      <div className="search mobile-dn">
        <Search />
      </div>

      <div className="icons-holder">
        <div className="nav-icon mobile-dn">
          <HomeIcon />
        </div>
        <div className="nav-icon mobile-dn">
          <MessageIcon />
        </div>

        <div className="nav-icon mobile-dn">
          <ExploreIcon />
        </div>

        <div className="nav-icon mobile-dn">
          <HeartIcon />
        </div>
        <img
          className="profile-pic rounded-full nav-icon"
          src="https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/90037111_914867012277305_4337845844301578240_n.jpg?tp=1&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=Lg4BzxdS-XgAX9zkIw2&edm=ABfd0MgAAAAA&ccb=7-4&oh=0efc75d02299b0e8d44b69e4544c7c1f&oe=60AAC272&_nc_sid=7bff83"
        />
      </div>
    </div>
  </div>
}

export default TopNav