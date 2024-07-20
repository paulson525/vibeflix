import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { signout } from '../../firebase'

const Navbar = () => {

  const [Color, setColor] = useState(false)
  const ChangeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true)      
    } else {
      setColor(false)
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  window.addEventListener('scroll', ChangeColor)

  return (
    <div className={Color ? 'navbar navbar-bg' : 'navbar'}>

        <div className="navlogo">
          <a href="/"><img src={logo} alt="VibeFlix" /></a>
        </div>

        <div className="navlinks">
          <ul className={`list ${isOpen ? 'open' : ''}`}>
            <i onClick={toggleMenu} className="fa-solid fa-xmark"></i>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/movies'>Movies</NavLink></li>
            <li><NavLink to='/shows'>Shows</NavLink></li>
          </ul>
        </div>

        <div className="extra">
          <Link style={{color: '#fff'}} to='/search'><i className="fa-solid fa-magnifying-glass"></i></Link>
          <div className="profile">
            <i className="fa-solid fa-user"></i>

            <div className="out">
              <p onClick={()=> {signout()}}>Sign Out</p>
            </div>
          </div>
          <i onClick={toggleMenu} className="fa-solid fa-bars" ></i>
        </div>

    </div>
  )
}

export default Navbar