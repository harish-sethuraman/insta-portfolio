import React from 'react';
import Award from 'Images/award.webp';
import Biriyani from 'Images/biriyani.webp';
import Ceo from 'Images/ceo.webp';
import Controllers from 'Images/controllers.webp';
import Crm from 'Images/crm.webp';
import Doodles from 'Images/doodles.webp';
import Firstday from 'Images/firstday.webp';
import Menu from 'Images/menu.webp';
import Prize from 'Images/prize.webp';
import Winner from 'Images/winner.webp';
import Wefms from 'Images/wefms.webp';
import Stay from 'Images/stay.webp';

import ImageLazy from 'Components/image-lazy';

const imageSource = {
  Award,
  Biriyani,
  Ceo,
  Controllers,
  Crm,
  Doodles,
  Firstday,
  Menu,
  Prize,
  Winner,
  Wefms,
  Stay,
};

const ImageRender = ({ title, classNames }) => (classNames === 'modal-image' ? (
  <img src={imageSource[title]} alt={title} loading="lazy" className={classNames} />
) : (
  <ImageLazy
    classNames={classNames}
    alt="user posts"
    decoding="auto"
    sizes="229px"
    source={imageSource[title]}
  />
));
export default ImageRender;
