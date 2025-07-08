import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App