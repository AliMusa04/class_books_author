import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <div>
        <img src="https://www.imgacademy.com/sites/default/files/imga-blue.png" alt="" />
      </div>
      <div>
        <ul>
          <li><Link to={"/"} >Author</Link></li>
          <li><Link to={'/books'}>Books</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
