import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcard = ({blog}) => {
    const {title, description, image, category, _id}=blog
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/blog/${_id}`)} className='curser-pointer w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shahdow-primary/25 duration-300'>
        <img src={image} alt="blogimage" className='aspect-video' />
         <span className='ml-5 mt-4  inline-block text-primary text-xs bg-primary/20  rounded-full px-3 py-1'>{category}</span>
         <div className='p-5'>
            <h3 className='mb-2 font-medium text-gray-900'>{title}</h3>
            <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{"__html":description.slice(0,80)}}></p>
         </div> 
    </div>
  )
}

export default Blogcard