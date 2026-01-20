import React from 'react'
export default function bestSellers(){
<div className='flex-row items-center justify-between'>
<h1 className='text-center text-5xl font-thin p-6'> Best Sellers </h1>
      <h1 className='text-center text-xl font-thin p-3'>Hand-crafted and personally chosen from the best for you</h1>
      <div className='grid grid-cols-4 gap-4 '>
        <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdc57ph2vwo-i3IdvQqMmY1w0nzHDs7-EZiA&s "></img>
          <p className='text-lg font-extralight'>  Pink Petal Handblock Set </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>

        </div>
        <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkgK0mCnd7NUD5IjH_L9AUUP0fsZGPWrUiw&s"></img>
          <p className='text-lg font-extralight'>  Bandhani Grace Chinon Anarkali Set </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
        <div>
          <img className="w-full h-full" src="https://dailydhaga.com/cdn/shop/files/122_c9b11be9-f821-4246-b157-0c4bd7816132.png?v=1722435116&width=533"></img>
          <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
        <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAn6uhB6r_HaWNQ7swSrX-dlhXadWdywiSg&s"></img>
          <p className='text-lg font-extralight'>  Velvet Bloom Co-ord Set </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
      </div>
</div>
}