import React, { useEffect } from 'react'
import './Home.css'
import hero from '../../assets/kalki.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    document.title = 'VibeFlix - Watch Movies and Shows';
  }, []);

  return (
    <>

    <Navbar />

    <div className="hero">
        <img src={hero} alt="Kalki" />
        <div className="herodesc">
          <p>A modern-day avatar of Vishnu, a Hindu god, who is believed to <br /> have descended to earth to protect the world 
            from evil forces.</p>
        </div>
        <div className="heroact">
          <button className='play'><Link className='playlink' to='/player/Kalki%20-%202898%20AD'><i className="fa-solid fa-play"></i>Play</Link></button>
          <button className='minfo'><Link className='minfo-link' to='/player/Kalki%20-%202898%20AD'><i className="fa-solid fa-circle-info"></i>More info</Link></button>
        </div>
    </div>

    <Cards title={"Popular Movies"}/>

    <div className="morecards">
      <Cards title={"Popular Shows"} category={"category=shows&key=popular"}/>
      <Cards title={"New Movies"} category={"category=movie&key=new"}/>
      <Cards title={"New Shows"} category={"category=shows&key=new"}/>
      <Cards title={"Blockbuster Movies"} category={"category=movie&blockbuster=true"}/>
      <Cards title={"Blockbuster Shows"} category={"category=shows&blockbuster=true"}/>
    </div>

    <Footer />

    </>
  )
}

export default Home