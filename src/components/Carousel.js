import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/biryani.png',
  '/images/dosa.png',
  '/images/poori.png',
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center p-4 items-center">
      <AnimatePresence mode='wait'>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Image ${index + 1}`}
          style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'cover'}}
          initial={{ opacity: 0 ,scale:1}}
          whileHover={{scale:1.1}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
