import React, { useState } from 'react';
import '../css/style.css';
import brett from '../images/pexels-brett-sayles-1309240.jpg';
import jc from '../images/pexels-jc-siller-8634867.jpg';
import josh from '../images/pexels-josh-sorenson-995301.jpg';
import oleg from '../images/pexels-oleg-magni-1813124.jpg';
import vishnu from '../images/pexels-vishnu-r-nair-1105666.jpg';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [brett, jc, josh, oleg, vishnu];

  return (
    <div className='hero-gallery'>
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      <h1>Grateful Band</h1>
      
      <ul className='gallery-bullets'>
        {images.map((_, index) => (
          <li
            key={index}
            className={index === currentImage ? 'active' : ''}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
