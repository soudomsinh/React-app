import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">Asia</a></li>
            <li><a href="#contact">Europe</a></li>
            <li><a href="#contact">Africa</a></li>
            <li><a href="#about">North America</a></li>
            <li><a href="#about">South America</a></li>

        </ul>
    </div>
  )
}

export default Navbar
