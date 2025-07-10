import React, { useState ,useEffect } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTable from '../../Components/admin/CommentTable'

const Comments = () => {
  const [comment, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')
  const fetchComments= async ()=>{
    setComments(comments_data)
  }
  useEffect(()=>{
    fetchComments()
  },[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-6 bg-blue-50/50'>
      <div className='flex justify-between items-cemter max-w-3xl'>
        <h1>Comments</h1>
        <div className='flex gap-4'>
          <button className={`${filter==='Not Approved' ?  ' text-primary' : ' text-gray-700'} px-4 py-1 rounded-full shadow-custom-sm border text-xs cursor-pointer`} onClick={()=>setFilter('Not Approved')}>Not Approved</button>
          <button className={`${filter==='Approved' ? ' text-primary' : ' text-gray-700'} px-4 py-1 rounded-full shadow-custom-sm border text-xs cursor-pointer`} onClick={()=>setFilter('Approved')}>Approved</button>
        </div>
      </div>
      <div className='relative mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
<table className='w-full text-sm  text-gray-500'>
  <thead className='text-xs text-gray-600 text-left uppercase'>
    <tr>
      
      <th scope='col' className='px-4 py-4 '>Comment</th>
      <th scope='col' className='px-4 py-4 max-sm:hidden'>Date</th>
      <th scope='col' className='px-4 py-4'>Actions</th>
    </tr>
  </thead>
  <tbody>
{comment.filter((comment)=>{
  if(filter==='Approved'){
    return comment.isApproved===true
  }
  return comment.isApproved===false;
}).map((comment,index)=>{
  return <CommentTable key={comment._id} comment={comment} fetchComments={fetchComments} index={index+1}/>
})}
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Comments