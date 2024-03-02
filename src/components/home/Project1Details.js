import { Button } from '@mui/material'
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography } from '@mui/material';
import {useNavigate } from 'react-router-dom';

const Project1Details = forwardRef((props,ref) => {
  const navigate = useNavigate();    
  const navigateToProject1 = () => {
    navigate("/project1")
  }

  return (
    <div
      ref={ref}
      className="flex md:flex-row flex-col items-center bg-gradient-to-r from-amber-500 to-amber-300 font-poppins text-white py-20 px-14 gap-3"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 ,x:-300 }}
          whileInView={{ opacity: 1,x:0}}
          transition={{ duration: 1.5 , easeElastic:"easeOut"}}
          className="mb-10 w-6/7"
        >
          <Typography className="sm:text-start text-center md:text-5xl text-3xl font-poppins font-bold bg-gradient-to-l from-amber-800 to-gray-900 bg-clip-text text-transparent mb-6">
             Food Class Predictor
          </Typography>
          <Typography variant="body1" className="sm:text-start text-center sm:text-lg font-poppins text-xs opacity-80 font-medium text-wrap text-white mb-6">
          This project aims to predict various attributes of Indian dishes, including diet, flavor profile, course, state, and region, using machine learning techniques. Leveraging a dataset containing dish names, ingredients, and associated attributes, a Random Forest classifier is trained for each attribute. The text data is transformed into TF-IDF features to capture term importance. The developed prediction function enables users to input dish names and ingredients, obtaining predicted attributes. The accuracy of predictions is assessed against a test set. This project serves as a valuable tool for automated categorization and analysis of Indian cuisine attributes.
          </Typography>
        </motion.div>
      </Container>
      <div className='border-2 border-solid shadow-xl rounded-xl'>
        <motion.div 
            initial={{rotate:0, scale:1}}
            whileHover={{ rotate:-5 ,scale:1.1}}
            className='flex items-center justify-center bg-amber-950 px-10 h-1/2 rounded-xl'
            onClick={navigateToProject1}
        >
            <Button className='bg-inherit font-poppins text-white w-full font-semibold'>
                    Enter Into the World
            </Button>
        </motion.div> 
       </div>
    </div>
  )
});

export default Project1Details