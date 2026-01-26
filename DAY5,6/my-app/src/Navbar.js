import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className='flex items-center justify-between font-thin px-10'>
      <Link className='xyz' to='/' > Home </Link>
      <Link className='xyz' to='#new' > New Arrivals  </Link>
      <Link className='xyz' to='#best'> Best Sellers </Link>
       <link rel="stylesheet" href="index.css"></link>
      <div class="dropdown">
        <button class="dropbtn">Categories</button>

        <div class="dropdown-content">
          <a href="#">Kurtis</a>
          <a href="#">Pant Sets</a>
          <a href="#">Dupatta Sets</a>
          <a href="#">Dresses</a>
          <a href="#">Co-ord Sets</a>
          <a href="#">Tops</a>
          <a href="#">All</a>
        </div>
      </div>
      <img width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW4cNT2hrA77S-KcU6dU87omJcTSvmIrHfA&s"></img>
     
      <Link className='xyz' to='#ourjourney'> Our Journey </Link>
      <Link className='xyz' to='#contact'>Contact us </Link>
      <Link className='xyz' to='/login' >Login</Link>
      <Link className='xyz' to='/signup' >Signup</Link>
  </div>
  )
}

export default Navbar