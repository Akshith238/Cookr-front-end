import React from 'react'
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Project2Nav = () => {
   const navigate = useNavigate();
   const goToHome = () => {
      navigate('/')
   }
return (
  <div className='w-screen'>
      <AppBar className="bg-gradient-to-r from-amber-500 to-amber-400" position='fixed' elevation={3} >
          <Toolbar className='flex justify-between h-24 max-w-full overflow-hidden'>
             <div className='flex flex-row items-center'>
                <motion.img
                src={"/images/cookr_logo.png"}
                alt="Logo"
                className="h-60 transition-translation duration-500 hover:-translate-y-1"
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                transition={{ duration: 4, ease:"easeInOut" }}
                />
                <motion.div 
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                transition={{ duration: 4, ease:"easeInOut" }}>
                    <Typography className='font-semibold font-poppins text-xl'>India's Largest Home Food App</Typography>
                </motion.div>
             </div>
             <div>
                <Button onClick={goToHome} className={`bg-inherit hover:bg-amber-950 shadow-xl transition-transform hover:-translate-y-1 duration-300 px-3 font-semibold rounded-xl font-poppins text-white`}>
                    Home
                </Button>
             </div>
          </Toolbar>
      </AppBar>
  
</div>
)
}

export default Project2Nav