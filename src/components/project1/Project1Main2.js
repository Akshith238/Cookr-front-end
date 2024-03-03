import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '70%',
  '& > *': {
    marginBottom: '1rem',
  },
});

const Project1Main2 = () => {
  const [formData, setFormData] = useState({
    'dish_name': '',
    'dish_ingredients': '',
  });
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToFlask(formData);
  };

  const sendDataToFlask = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/predictFood2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      setPredictionResult(responseData);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setPredictionResult(null);
      setError('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    console.log(predictionResult);
  }, [predictionResult]); // Log predictionResult whenever it changes

  return (
    <div>
      <motion.div
        className='flex flex-col gap-4 items-center mt-44'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold mb-8">Food Class Predictor</h1>
        <StyledForm className='gap-5 p-5' onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="dish_name"
            label="Dish Name"
            color='warning'
            value={formData.dish_name}
            onChange={handleChange}
          />
          <TextField
            type="text"
            name="dish_ingredients"
            label="Dish Ingredients"
            color='warning'
            value={formData.dish_ingredients}
            onChange={handleChange}
          />
          <Button className='bg-amber-950 text-white font-poppins font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5' type="submit">Submit</Button>
        </StyledForm>
        {predictionResult && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Prediction Result:</h2>
            <ul className="list-disc">
              {Object.entries(predictionResult).map(([key, value]) => (
                <li key={key}>
                  <span className="font-semibold">{key}: </span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && <div>Error: {error}</div>}
      </motion.div>    
    </div>
  );
};

export default Project1Main2;
