import React, { useEffect, useState } from 'react'
import './Search.css'
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {


  useEffect(() => {
    document.title = 'VibeFlix - Search';
  }, []);

const [apiData , setApiData] = useState([])
const [searchQuery, setSearchQuery] = useState([])
const [filterValue, setFilterValue] = useState('')

const options = {
  method: 'GET',
  headers: {'X-RapidAPI-Key': 'f36c84815fmsh88ddcdda1db7f57p19dffejsn526864b4d9f1'}
};

useEffect(() => {

  fetch(`https://vibeflix-api2.p.rapidapi.com/`, options)
  .then(response => response.json())
  .then(response => {setApiData(response.Products)
                      setSearchQuery(response.Products)
  })
  .catch(err => console.error(err));


}, [])

const handleFilter = (e) => {
  if (e.target.value == '') {
      setApiData(searchQuery) 
  } else{
    const filterResult = searchQuery.filter(card => card.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setApiData(filterResult)
  }
  setFilterValue(e.target.value)
}

const goBack = useNavigate()


  return (
    <div className='search-page'>

      <p>Search</p>
      
      <div className="search-bar">
        <form>
          <input type="text" value={filterValue} onInput={ (e) => handleFilter(e)} name='search' autoComplete='off' placeholder='Search Movies & Shows'/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>

      

      <div className="search-results">
        <p className='head'><i onClick={() => goBack(-1)} className="fa-solid fa-chevron-left"> </i> Search Results</p>
              <div className="movies-list">
              {apiData.map((card, index) => {
                return <Link to={`/player/${card.title}`} className="movie" key={index}>
                  <img src={`https://raw.githubusercontent.com/paulson525/VibeFlixAPI/master`+card.thumbnail} alt={card.title} />
                  <p className='search-title'>{card.title}</p>
                </Link>
                })}
              </div>
      </div>

      </div>
  )
}

export default Search