import React, { useEffect, useState } from 'react'
import './Cards.css'
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({title, category}) => {
 

  const [apiData , setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': 'f36c84815fmsh88ddcdda1db7f57p19dffejsn526864b4d9f1'}
  };

  useEffect(() => {

    fetch(`https://vibeflix-api2.p.rapidapi.com/?${category?category:"category=movie&key=popular"}`, options)
    .then(response => response.json())
    .then(response => setApiData(response.Products))
    .catch(err => console.error(err));


  }, [])

  
  
  return (
    <div className='cards-container'>
      <div className="cards-header">
        <p className='header'>{title ? title : "Popular Movies"}</p>
        {title && (
        <Link to={title.toLowerCase().includes('movies') ? '/movies' : '/shows'}>
            See all <i className="fa-solid fa-chevron-right"></i>
        </Link>
      )}
      </div>
      <div className="cards-list">
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.title}`} className="card" key={index}>
            <img src={`https://raw.githubusercontent.com/paulson525/VibeFlixAPI/master`+card.thumbnail} alt={card.title} />
            <p>{card.title}</p>
          </Link>
        })}
      </div>
    </div>
  )

}

export default Cards