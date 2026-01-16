import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between font-thin'>
        <h1>Home</h1>
        <h1>Categories</h1>
        <h1>New Arrivals</h1>
        <img width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW4cNT2hrA77S-KcU6dU87omJcTSvmIrHfA&s"></img>
        <h1>Best Sellers</h1>
        <h1>Our Journey</h1>
        <h1>Contact Us</h1>
    </div>
  )
}

export default Navbar