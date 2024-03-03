import React from 'react';
import TypingText from './TypingText';
import { Typography } from '@mui/material';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-300 mt-24 p-4 pb-7 h-96">
        <motion.div 
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1,ease:"easeOut"}}
        >
            <Carousel />
        </motion.div>
        <div className='flex w-2/3 flex-col md:gap-8 p-3 gap-1'>
          <TypingText text="Team Chilli Flakes Welcomes You" />
          <TypingText text="Freshly Home Made Meals" />
          <div className='border-2 border-solid shadow-xl rounded-xl w-1/4'>
            <motion.div 
            initial={{rotate:0, scale:1}}
            whileHover={{ rotate:-5 ,scale:1.1}}
            className=' bg-amber-950 p-4 rounded-xl'>
                <Typography className='font-poppins text-white font-bold'>Taste Of Home</Typography>
            </motion.div>
          </div>
          <Typography className='font-poppins md:text-3xl text-xl font-bold bg-gradient-to-r from-slate-800 to-gray-900 text-transparent bg-clip-text'>In Your Own Neighbourhood</Typography>
        </div>
    </div>
  );
};

export default Hero; 