import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Add.css';


const ImageSlider = ({ images = [] }) => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image, index) =>
       (
        <div key={index}>
          <img className='image-slider' src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
