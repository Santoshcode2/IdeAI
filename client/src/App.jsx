import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { assets } from '../assets/assets'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddBlog from './pages/Admin/AddBlog'
import ListBlog from './pages/Admin/ListBlog'
import Comments from './pages/Admin/Comments'
import Login from './components/Admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

   const {token} = useAppContext()

  return (
    <div>
       <Toaster/>
         {/* here we will create the routing */}
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/admin' element={ token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='AddBlog' element={<AddBlog/>}/>
          <Route path='ListBlog' element={<ListBlog/>}/>
          <Route path='Comments' element={<Comments/>}/>
                                       
          </Route>
         </Routes>
    </div>
  )
}

export default App