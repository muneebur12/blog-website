import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog' 
import Layout from './Pages/Admin/Layout'
import Dashboard from './Pages/Admin/Dashboard'
import ListBlog from './Pages/Admin/ListBlog'
import AddBlog from './Pages/Admin/AddBlog'
import Comments from './Pages/Admin/Comments' 
import Login from './Components/admin/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={true ?<Layout />:<Login />}>
          <Route index element={<Dashboard />} />
           <Route path='add-blog' element={<AddBlog />} />
          <Route path='list-blog' element={<ListBlog />} />
          <Route path='comments' element={<Comments />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App