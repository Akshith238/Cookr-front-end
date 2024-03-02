import React from 'react'
import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = ({project1Ref,project2Ref}) => {
    const scrollToProject1 = () => {
        project1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToProject2 = () => {
        project2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
return (
  <div className='w-screen'>
      <AppBar className="bg-gradient-to-r from-amber-500 to-amber-400" position='fixed' elevation={3} >
          <Toolbar className='flex justify-between  h-24 max-w-full overflow-hidden'>
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
             <div className='flex gap-8'>
                <Button onClick={scrollToProject1} className={`bg-inherit hover:bg-amber-950 shadow-xl transition-transform hover:-translate-y-1 duration-300 px-3 font-semibold rounded-xl font-poppins text-white`}>
                    Project 1
                </Button>
                <Button onClick={scrollToProject2} className={`bg-inherit hover:bg-amber-950 shadow-xl transition-transform hover:-translate-y-1 duration-300 px-3 font-semibold rounded-xl font-poppins text-white`}>
                    Project 2
                </Button>
             </div>
          </Toolbar>
      </AppBar>
  
</div>
)
}

export default Navbar