import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Sign from './Pages/SignIn/Sign'
import Movies from './Pages/Movies/Movies'
import Shows from './Pages/Shows/Shows'
import Player from './Pages/Player/Player'
import Search from './Pages/Search/Search'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {

  const navigate = useNavigate(1)
  
  useEffect(()=>{

    onAuthStateChanged(auth, async (user)=> {
      if (user) {
        navigate(() => {'/' ? '/': 0} )
      } else {
        navigate('/signin')
      }
    })
  }, [])
  

  return (
    <>
    <ToastContainer  theme='dark' />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movies' element={<Movies />}/>
      <Route path='/shows' element={<Shows />}/>
      <Route path='/player/:title' element={<Player />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/signin' element={<Sign />}/>
    </Routes>
    </>
  )
}

export default App
