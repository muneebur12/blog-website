import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { blog_data,assets, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../Components/Loader'

const Blog = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null)
  const [Comments, setComment] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const fetchBlog = async () => {
     const data = blog_data.find(item=>item._id===id)
     setBlog(data)
  }
  const fetchComment= async()=>{
    setComment(comments_data)
  }
  const addComment = async(e) => {
    e.preventDefault()
    const name = e.target[0].value
    const content = e.target[1].value
    const newComment = {name,content,createdAt:new Date()}
    setComment([...Comments,newComment])
    setName('')
    setContent('')
  }
  useEffect(()=>{
    fetchBlog()
    fetchComment()
  },[])

  return blog ? (
    <div> 
       <img src={assets.gradientBackground} alt="gradiant" className='absolute -top-50 -z-1 opacity-50' />
     <Navbar/>
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>Published on {Moment(blog.createdAt).format('DD MMMM YYYY')}</p>
        <h1  className='text-2xl sm:text-5xl font-semibold  text-gray-800 max-w-2xl mx-auto'>{blog.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{"__html":blog.subTitle}}></h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Michael Brown</p>
      </div>
      <div className='mx-5 max-w-3xl md:mx-auto my-10 mt-6'>
  <img src={blog.image} alt="thumbnail" className='rounded-3xl mb-5'  />
  <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{"__html":blog.description}}></div>

  <div className='mt-14 mb-10 max-w-3xl mx-auto'>
   <p className='mb-4'>Comments ({Comments.length})</p>
   <div className='flex flex-col gap-4'>
    {Comments.map((item)=>(
      <div key={item} className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'>
         <div className='flex item-center gap-2 mb-2'>
        <img src={assets.user_icon} alt="user" className='w-6' />
          <p className='font-medium'>{item.name}</p>
        
        </div>
        <p className='text-sm max-w-md ml-8'>{item.content}</p>
        <div className='text-xs absolute bottom-3 right-4 flex item-center gap-2'>{Moment(item.createdAt).fromNow()}</div>
      </div>
    ))}
   </div>
  </div>
  <div className='max-w-3xl mx-auto'>
<p className='font-semibold mb-4'>Add your comment</p>
<form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
  <input    onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none' />
  <textarea  onChange={(e)=>setContent(e.target.value)} value={content} className='w-full p-2 border border-gray-300 rounded outline-none h-48' placeholder='Write your comment'></textarea>

  <button className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer ' type='submit'>Submit</button>
</form>
  </div>
  <div className='my-24 max-w-3xl mx-auto'>
<p className='font-semibold my-4'>Share this article on social media</p>
<div className='flex gap-1 cursor-pointer'>
  <img src={assets.facebook_icon} alt="facebook" width={50}/>
  <img src={assets.twitter_icon} alt="twitter" width={50}  />
  <img src={assets.googleplus_icon} alt="linkedin" width={50} />
</div>
  </div>
      </div>
      <Footer/>
    </div>
  ) : 
    <Loader/>
 
}

export default Blog