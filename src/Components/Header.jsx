import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
            <div className='text-center mt-20 mb-10'>
                <div className='inline-flex item-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full'>
                    <p>New: AI feature integrated</p>
                    <img src={assets.star_icon} alt="star-icon" className='w-2.5' />
                </div>
                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own <span className='text-primary'>blogging</span> <br />
                    platform.</h1>
                <p className='text-gray-500 my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs'>This is your space to think out loud, to share what matters, and to write without filters. Whether it’s  one word or a thousand, your story starts right here.</p>
                <form className='flex justify-between max-w-lg mx-auto max-sm:scale-75 border border-gray-300 bg-white rounded overflow-hidden'>
                    <input type="text" placeholder='Search for a blog' required className='w-full pl-4 outline-none' />
                    <button type='submit' className='bg-primary text-white px-8 py-2 rounded m-1.5 hover:scale-105 transition-all cursor-pointer '>
                        Search
                    </button>
                </form>
            </div>
            <img src={assets.gradientBackground} alt="gradiant" className='absolute -top-50 -z-1 opacity-50' />
        </div>
    )
}

export default Header