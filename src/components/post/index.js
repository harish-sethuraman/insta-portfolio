import React from "react";
import HeartIcon from "Icons/heart";

const Post = () => {
  return (
    <div className="sm:p-2 w-4/12 post relative">
      <div class="absolute z-10 text-white flex h-full w-full md:h-60 md:w-60 h-48 w-48 lg:h-64 lg:w-64 justify-center items-center icons">
       <div class="flex"> <HeartIcon fill="#fff" /> <p class="pl-2">100</p></div>
       <div class="flex p-2"><HeartIcon fill="#fff" /> <p class="pl-2">100</p></div>
      </div>

      <img
        className=""
        alt="Photo by Elon Musk Now on March 17, 2021. May be an image of 1 person, standing and text that says 'OCCUPY'."
        className="FFVAD"
        crossOrigin="anonymous"
        decoding="auto"
        style={{ objectFit: "cover" }}
        src="https://instagram.fmaa2-2.fna.fbcdn.net/v/t51.2885-15/e35/c32.0.415.415a/160998778_773530343300447_2817680919555834833_n.jpg?tp=1&amp;_nc_ht=instagram.fmaa2-2.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=a78iEOMF4jMAX91YLND&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=d6f8cd6979bb228e01bc13ff46b2d17f&amp;oe=60AC1366&amp;_nc_sid=7bff83"
      ></img>
    </div>
  );
};

export default Post;
