import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-4'>
        
        <NavLink end={true} to='/admin' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary" }`}>
            <img src={assets.home_icon} alt="Home_icon" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>
        <NavLink  to='/admin/add-blog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary" }`}>
            <img src={assets.add_icon} alt="add_icon" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Add Blog</p>
        </NavLink>
        <NavLink  to='/admin/list-blog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary" }`}>
            <img src={assets.list_icon} alt="list_icon" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Blog Lists</p>
        </NavLink>
        <NavLink  to='/admin/comments' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary" }`}>
            <img src={assets.comment_icon} alt="comments_icon" className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Comments</p>
        </NavLink>
        
    </div>
  )
}

export default Sidebar