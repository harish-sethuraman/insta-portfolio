import React from 'react';
import Name from 'Components/name';
import Stats from 'Components/stats';

const Header = () => (
  <div className="w-full md:flex md:justify-around">
    <div className="lg:w-6/12 md:w-9/12 w-full md:flex px-10">
      <div className="flex">
        <div className="h-14 w-14 md:h-40 md:w-40">
        <img className="rounded-full my-3 h-full w-full" src="https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/90037111_914867012277305_4337845844301578240_n.jpg?tp=1&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=Lg4BzxdS-XgAX9zkIw2&edm=ABfd0MgAAAAA&ccb=7-4&oh=0efc75d02299b0e8d44b69e4544c7c1f&oe=60AAC272&_nc_sid=7bff83" />
        </div>
        <div className="md:hidden lg:hidden block ml-10">
          <Name />
        </div>
      </div>
      <div className="md:ml-10 lg:ml-10">
        <div className="hidden lg:block md:block">
          <Name />
        </div>
        <div className="hidden md:block lg:block">
          <Stats />
        </div>
        <div className="mt-5">
          <p className="font-semibold ">Frontend wizard</p>
          <p>Doing magic with CSS</p>
          <p>Harish Kumar</p>
          <p>Harish Kumar</p>
          <p>Harish Kumar</p>
        </div>
      </div>
    </div>
    <div className="block lg:hidden md:hidden">
      <Stats />
    </div>
  </div>

);

export default Header;
