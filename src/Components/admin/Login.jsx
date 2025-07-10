import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl rounded-lg shadow-primary/15'>
        <div className='flex flex-col items-center justify-center'>
<div className='w-full py-6 text-center'>
  <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span> Login</h1>
  <p className='font-light'>Enter your credentials to access admin panel</p>
</div>
<form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
  <div className='flex flex-col'>
    <label htmlFor="email">Email</label>
    <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' required className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
    </div>
    <div className='flex flex-col'>
    <label htmlFor="password">Password</label>
    <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' required className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
    </div>
    <button type='submit' className='w-full py-3 font-medium bg-primary text-white p-2 rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
</form>
        </div>
      </div>
    </div>
  )
}

export default Login