import React from 'react'
import HomeIcon from "Icons/home";
import MessageIcon from "Icons/message";
import ExploreIcon from "Icons/explore";
import HeartIcon from "Icons/heart";
import Search from 'Components/search'
import "./index.css";

const TopNav = ( ) =>{
    return  <div className=" flex bg-white border-b border-gray-200 w-screen justify-around">
    <div className="flex justify-between w-2/3">
      <img
        className="icon my-3"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
      />
      {/* <div className="invisible md:visible">  */}
     <Search/>
     {/* </div> */}

      <div className="hidden md:flex justify-between w-1/4">
        <div className="h-1/5 py-3">
          <HomeIcon />
        </div>
        <div className="h-1/5 py-3">
      <MessageIcon />
        </div>

        <div className="h-1/5 py-3">
          <ExploreIcon />
        </div>

        <div className="h-1/5 py-3">
          <HeartIcon/>
        </div>
        <img
          className="profile-pic rounded-full my-3" 
          src="https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/90037111_914867012277305_4337845844301578240_n.jpg?tp=1&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=Lg4BzxdS-XgAX9zkIw2&edm=ABfd0MgAAAAA&ccb=7-4&oh=0efc75d02299b0e8d44b69e4544c7c1f&oe=60AAC272&_nc_sid=7bff83"
        />
      </div>
    </div>
  </div>
}

export default TopNav