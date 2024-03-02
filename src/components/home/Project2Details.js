import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Project2Details = forwardRef((props,ref) => {
  const navigate = useNavigate(); 
  const navigateToProject2 = () => {
    navigate("/project2")
  }
     
  return (
    <section
      ref={ref}
      className="flex md:flex-row flex-col items-center bg-gradient-to-r from-amber-500 to-amber-300 font-poppins text-white py-20 px-14 gap-10"
    >
      <div className='border-2 border-solid shadow-xl rounded-xl'>
        <motion.div 
                initial={{rotate:0, scale:1}}
                whileHover={{ rotate:-5 ,scale:1.1}}
                className='flex items-center justify-center bg-amber-950 px-10 h-1/2 rounded-xl'
                onClick={navigateToProject2}
        >
            <Button className='bg-inherit font-poppins text-white w-full font-semibold'>
                    Enter Into the World
                </Button>
        </motion.div> 
       </div>
       <Container>
        <motion.div
          initial={{ opacity: 0 ,x:300 }}
          whileInView={{ opacity: 1,x:0}}
          transition={{ duration: 1.5 , easeElastic:"easeOut"}}
          className="mb-10 w-6/7"
        >
          <Typography className="sm:text-start text-center md:text-5xl text-3xl font-poppins font-bold bg-gradient-to-l from-amber-800 to-gray-900 bg-clip-text text-transparent mb-6">
             Predictive Maintenance
          </Typography>
          <Typography variant="body1" className="sm:text-start text-center sm:text-lg font-poppins text-xs opacity-80 font-medium text-wrap text-white mb-6">
          This model addresses the challenge of predicting system failures using simulated real-time data. Leveraging a Random Forest classifier, the code initializes, trains, and evaluates the model on a dataset containing features related to system behavior. Additionally, the model visualizes three decision trees within the Random Forest, providing transparency into the model's decision-making process. Hyperparameter tuning is implemented through randomized search to enhance the model's predictive performance, with a focus on the number of estimators and maximum depth. The ultimate objective is to create an accurate and robust system failure prediction model for real-time applications   
          </Typography>       
        </motion.div>
      </Container>
    </section>
  );
});

export default Project2Details;