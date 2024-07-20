import React, { useEffect, useState } from 'react'
import './Shows.css'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Shows = () => {

  useEffect(() => {
    document.title = 'VibeFlix - Shows';
  }, []);


  const [apiData , setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': 'f36c84815fmsh88ddcdda1db7f57p19dffejsn526864b4d9f1'}
  };

  useEffect(() => {

    fetch(`https://vibeflix-api2.p.rapidapi.com/?category=shows&sort=-blockbuster`, options)
    .then(response => response.json())
    .then(response => setApiData(response.Products))
    .catch(err => console.error(err));


  }, [])

  const goBack = useNavigate()


  return (
    <>

        <Navbar />
          
          
        <div className="movies">
          <p className='head'><i onClick={() => goBack(-1)} className="fa-solid fa-chevron-left"></i> Shows</p>
          <div className="movies-list">
          {apiData.map((card, index) => {
            return <Link to={`/player/${card.title}`} className="movie" key={index}>
              <img src={`https://raw.githubusercontent.com/paulson525/VibeFlixAPI/master`+card.thumbnail} alt={card.title} />
              <p>{card.title}</p>
            </Link>
            })}
          </div>
        </div>
          
          
        <Footer />

    </>
  )
}

export default Shows