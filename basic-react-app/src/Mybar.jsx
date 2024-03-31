import React from 'react'
import './mybar.css'

function Mybar() {
  return (
    <ul>
        <li><a className="active" href="#home">My App</a></li>
        <li><a href="#news">Home</a></li>
        <li><a href="#contact">About</a></li>
    </ul>
  )
}

export default Mybar
