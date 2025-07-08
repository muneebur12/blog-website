import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

  return (
  <div className='flex justify-between items-center py-6 mx-8 sm:mx-20 xl:mx-32 '>
<img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-32 sm:w-44 cursor-pointer' />
<button onClick={()=>navigate('/admin')} className='flex items-center bg-primary text-white px-10 py-2.5 rounded-full gap-2 text-sm cursor-pointer '>
  Login 
  <img src={assets.arrow} alt="arrow" className='w-3' />
</button>
  </div>
  )
}

export default Navbar