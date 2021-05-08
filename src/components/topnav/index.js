import React, { useState } from 'react';
import {
  HomeIcon, MessageIcon, ExploreIcon, HeartIcon, ProfileIcon, SavedIcon, SettingsIcon, SwitchIcon,
} from 'Icons/icons';
import Search from 'Components/search';
import './index.css';
import InstaDp from 'Images/instadp.jpeg';
import InstaIcon from 'Images/instaicon.jpeg';
import ImageLazy from 'Components/image-lazy';

const TopNav = () => {
  const [userDropdown, showUserDropdown] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="site-icon-holder">
          <ImageLazy
            classNames="site-icon"
            alt="site icon"
            source={InstaIcon}
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
          <ImageLazy
            onClick={() => showUserDropdown(!userDropdown)}
            classNames="profile-pic rounded-full nav-icon"
            alt="profile pic"
            source={InstaDp}
          />
          {userDropdown && (
          <div className="user-dropdown">
            <div className="dropdown-menu">
              <ProfileIcon />
              Profile
            </div>
            <div className="dropdown-menu">
              <SavedIcon />
              Saved
            </div>
            <div className="dropdown-menu">
              <SettingsIcon />
              Settings
            </div>
            <div className="dropdown-menu">
              <SwitchIcon />
              Switch Accounts
            </div>
            <div className="dropdown-menu">logout</div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
