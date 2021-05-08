import React, { useState } from 'react';
import {
  HeartIcon, SendIcon, CommentIcon, CloseIcon,
} from 'Icons/icons';
import ImageLazy from 'Components/image-lazy';
import InstaDp from 'Images/instadp.jpeg';
import { renderImage } from './helper';

const Post = ({ title, description }) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <div className="post relative" onClick={() => setshowModal(true)}>
        <div className="post-reactions">
          <div className="flex">
            <HeartIcon fill="#fff" />
            <p className="text-bold">123</p>
          </div>
          <div className="flex left-padding">
            <CommentIcon fill="#fff" />
            <p className="text-bold">o</p>
          </div>
        </div>

        {renderImage(title, 'post-image')}
      </div>
      {showModal && (
      <div className="post-modal">
        <div className="close-button" onClick={() => setshowModal(false)}>
          {' '}
          <CloseIcon />
          {' '}
        </div>
        <div className="modal">
          <div className="modal-pic">{renderImage(title, 'modal-image')}</div>
          <div className="modal-content">
            <div className="modal-user-detail">
              <ImageLazy source={InstaDp} classNames="rounded-full" />
              <div className="name text-bold ">
                Harish Kumar
              </div>
              <div>
                <a className="follow">Follow</a>
              </div>
            </div>
            <div className="post-description">
              <ImageLazy source={InstaDp} classNames="rounded-full" />
              <div className="description-content">
                <span className=" post-text-bold ">
                  Harish Kumar
                </span>
                {description}
              </div>
            </div>
            <div className="reactions">
              <div className="reactions-icons">
                <HeartIcon />
                <CommentIcon />
                <SendIcon />
              </div>
              <div className="likes post-text-bold">123 likes</div>
              <div className="comment">
                <div className="emoji">🙂</div>
                <div className="comment-text">
                  Add a comment
                  <div className="post-comment">Post</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Post;
