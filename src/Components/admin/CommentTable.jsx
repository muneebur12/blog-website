import React from 'react'
import { assets } from '../../assets/assets'

const CommentTable = ({comment,fetchComments}) => {
    const {_id,blog,createdAt}=comment
    const BlogDate= new Date(createdAt)
  return (
    <tr className='border-y border-gray-300'>
        <td className='px-4 py-5'>
            <b className='font-medium text-gray-600'>Blog</b>:{blog.title}
            <br />
            <b className='font-medium text-gray-600'>Name</b>:{comment.name}
            <br />
            <b className='font-medium text-gray-600'>Comment</b>:{comment.content}
        </td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4'>
            <div className='inline-flex gap-4 items-center'>
                {!comment.isApproved?
             <img src={assets.tick_icon} alt="tick_icon" className='w-5 hover:scale-110 transition-all cursor-pointer' />:
             <p className='text-xs border bprder-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p> 
            }
            <img src={assets.bin_icon} alt="bin_icon" className='w-5 hover:scale-110 transition-all cursor-pointer' />
            </div>
        </td>
    </tr>
  )
}

export default CommentTable