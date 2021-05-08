import React from 'react';
import Award from 'Images/award.jpeg';
import Biriyani from 'Images/biriyani.jpeg';
import Ceo from 'Images/ceo.jpeg';
import Controllers from 'Images/controllers.jpeg';
import Crm from 'Images/crm.jpg';
import Doodles from 'Images/doodles.jpeg';
import Firstday from 'Images/firstday.jpeg';
import Menu from 'Images/menu.jpeg';
import Prize from 'Images/prize.jpeg';
import Winner from 'Images/winner.jpg';
import Wefms from 'Images/wefms.jpeg';
import Stay from 'Images/stay.jpeg';

import ImageLazy from 'Components/image-lazy';

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
