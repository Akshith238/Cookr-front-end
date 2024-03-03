import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography } from '@mui/material';
import Carousel from '../Carousel';

const AboutSection = () => {
  return (
    <section
      className="flex md:flex-row flex-col bg-gradient-to-r from-amber-500 to-amber-300 font-poppins text-white py-20 px-14 gap-10"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 ,x:-300 }}
          whileInView={{ opacity: 1,x:0}}
          transition={{ duration: 1.5 , easeElastic:"easeOut"}}
          className="mb-10 w-6/7"
        >
          <Typography className="sm:text-start text-center md:text-5xl text-3xl font-poppins font-bold bg-gradient-to-l from-amber-800 to-gray-900 bg-clip-text text-transparent mb-6">
            About Cookr
          </Typography>
          <Typography variant="body1" className="sm:text-start text-center sm:text-lg font-poppins text-xs opacity-80 font-medium text-wrap text-white mb-6">
          At Cookr, we believe that everyone deserves to enjoy delicious and healthy food, without compromising on taste or quality. We are an early-stage food tech startup on a mission to revolutionise the food industry in India by building an e-commerce marketplace that offers a wide range of healthy alternatives to restaurant-delivered food. We partner with extremely talented home cooks to bring you delicious homemade meals straight from their homes. Not only does this allow us to offer our customers an unparalleled dining experience, but it also helps to create thousands of micro-entrepreneurs in society and enables them to make a primary livelihood for their families.          </Typography>
        </motion.div>
      </Container>
      <motion.div 
        initial={{opacity:0, x:300}}
        whileInView={{opacity:1, x: 0}}
        transition={{duration: 1.5,}}
        className="flex justify-center"
       >
         <Carousel />
      </motion.div>
    </section>
  );
};

export default AboutSection;