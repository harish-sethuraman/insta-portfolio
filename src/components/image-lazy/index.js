import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ImageLazy = ({
  source, classNames, alt, sizes, onClick
}) => <LazyLoadImage
    onClick={onClick}
    alt={alt}
    src={source}
    effect="opacity"
    className={classNames}
  />
  ;

export default ImageLazy;
