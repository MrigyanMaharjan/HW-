import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

         <div className=' h-screen w-screen flex items-center justify-center flex-col font-sans bg-indigo-500 gap-5 text-gray-50'>
      <p className='text-2xl'>Lost Homework??</p>
      <span>No problem just join us</span>
      <Link to={'/home'} className=' hover:bg-gray-50 hover:text-gray-900 transition duration-150 border-2 border-white rounded-lg p-2'>Enter site</Link >
    </div>
  
  )
}

export default Home