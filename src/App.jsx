import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sign from './Pages/SignIn/Sign';
import Movies from './Pages/Movies/Movies';
import Shows from './Pages/Shows/Shows';
import Player from './Pages/Player/Player';
import Search from './Pages/Search/Search';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (window.location.pathname === '/signin') {
          navigate('/');
        }
      } else {
        if (window.location.pathname !== '/signin') {
          navigate('/signin');
        }
      }
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, [navigate]);


  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/player/:title' element={<Player />} />
        <Route path='/search' element={<Search />} />
        <Route path='/signin' element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
