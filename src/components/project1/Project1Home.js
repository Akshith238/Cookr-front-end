import React from 'react'
import Project1Nav from './Project1Nav'
import Project1Main from './Project1Main'

const Project1Home = () => {
  return (
    <div className='flex flex-col font-poppins justify-center'>
       <Project1Nav />
       <Project1Main />
    </div>
  )
}

export default Project1Home