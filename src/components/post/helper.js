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

// eslint-disable-next-line import/prefer-default-export
export const renderImage = (title, classNames) => {
  switch (title) {
    case 'award':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Award}
        />
      );
    case 'biriyani':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Biriyani}
        />
      );
    case 'ceo':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Ceo}
        />
      );
    case 'controllers':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Controllers}
        />
      );
    case 'crm':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Crm}
        />
      );
    case 'doodles':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Doodles}
        />
      );
    case 'firstday':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Firstday}
        />
      );
    case 'menu':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Menu}
        />
      );
    case 'prize':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Prize}
        />
      );
    case 'stay':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Stay}
        />
      );

    case 'wefms':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Wefms}
        />
      );

    case 'winner':
      return (
        <ImageLazy
          classNames={classNames}
          alt="user posts"
          decoding="auto"
          sizes="229px"
          source={Winner}
        />
      );
    default:
      return null;
  }
};
