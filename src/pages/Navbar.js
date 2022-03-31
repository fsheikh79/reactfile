import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">eCanteen</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link className="nav-link" to="/home">Home </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/aboutus">About Us</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/contactus">Contact Us </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/registration">UserRegisteration</Link>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Recipe</a>   
   </li> */}
    </ul>
   </div>
</nav>
    

  )
}