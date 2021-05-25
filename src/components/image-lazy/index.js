import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageLazy = ({
  source, classNames, alt, sizes, onClick,
}) => (
  <LazyLoadImage
    onClick={onClick}
    alt={alt}
    src={source}
    effect="blur"
    className={classNames}
  />
);
export default ImageLazy;
