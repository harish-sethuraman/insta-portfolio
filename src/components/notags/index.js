import React from 'react';
import { TagIcon } from 'Icons/icons';

const NoTags = () => (
  <div className="no-tags">
    <div className="no-tag-content">
      <center><TagIcon fill="#8e8e8e" /></center>
      <div className="no-tag-text">No Photos</div>
    </div>
  </div>
);
export default NoTags;
