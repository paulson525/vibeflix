import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  useEffect(() => {
    document.title = title;
  }, []);

  const {title} = useParams()

  const [apiData , setApiData] = useState({
    title: "",
    description: "",
    video: ""
  })

  const options = {
    method: 'GET',
    headers: {'X-RapidAPI-Key': 'f36c84815fmsh88ddcdda1db7f57p19dffejsn526864b4d9f1'}
  };

  useEffect(() => {

    fetch(`https://vibeflix-api2.p.rapidapi.com/?title=${title}`, options)
    .then(response => response.json())
    .then(response => setApiData(response.Products[0]))
    .catch(err => console.error(err));


  }, [])

  const goBack = useNavigate() 

  return (
    
    <div className='player'>
      <p className='head'><i onClick={() => goBack(-1)} className="fa-solid fa-chevron-left"></i> {apiData.title}</p>
      <p className="description">{apiData.description}</p>
      <div className="playerinfo">
      <iframe width='90%' height='640px' frameBorder= '0' src={`${apiData.video}`} title='Movie/Show' allowFullScreen></iframe>

      </div>
    </div>
  )
}

export default Player