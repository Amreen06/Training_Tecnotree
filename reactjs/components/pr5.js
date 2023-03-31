import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, duration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, duration);

    return () => clearInterval(intervalId);
  }, [duration, images.length]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Slideshow" />
    </div>
  );
};

export default Slideshow;