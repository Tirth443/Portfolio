import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav'>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      <Link to='/projects'>Projects</Link>
      {/* <Link to='/skills'>Skills</Link>  */}
      <Link to='/Contact'>Contact</Link>

    </div>
    </div>
  )
}

export default Navbar
