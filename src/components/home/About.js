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
            About ChillyFlakes
          </Typography>
          <Typography variant="body1" className="sm:text-start text-center sm:text-lg font-poppins text-xs opacity-80 font-medium text-wrap text-white mb-6">
            Chilly Flakes is a dynamic team of software systems students from PSG Tech, adept in the realms of Full Stack Web Development and Machine Learning. Our diverse skill set, honed through rigorous academic training and hands-on experience, equips us to tackle complex challenges with confidence.
            As participants in the Cookr Food Tech Hackathon, we bring a fresh perspective and a commitment to innovation. Our passion for technology drives us to push boundaries and explore novel solutions that bridge the gap between culinary artistry and cutting-edge technology.
            With a focus on crafting intuitive and user-centric web applications, coupled with our ability to leverage data-driven insights through machine learning, Chilly Flakes is poised to make a significant impact in the food tech industry. We're excited to collaborate, innovate, and showcase our talents as we embark on this exciting journey         
          </Typography>
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