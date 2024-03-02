import React ,{useEffect, useRef} from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero';
import AboutSection from './About';
import Project1Details from './Project1Details';
import Project2Details from './Project2Details';



const Home = () => {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col font-poppins justify-center'>
       <Navbar project1Ref={project1Ref} project2Ref={project2Ref}/>
       <Hero />
       <AboutSection />
       <Project1Details ref={project1Ref} />
       <Project2Details ref={project2Ref} />
    </div>
  )
}

export default Home