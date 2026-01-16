import React from 'react'
function Header() {
  return (
    <div className='flex-row items-center justify-between'>
      <img src="https://dailydhaga.com/cdn/shop/files/D_04.jpg?v=1746254327&width=3840"></img>
      <h1 className='text-center text-5xl font-thin p-6'> New Arrivals </h1>
      <h1 className='text-center text-xl font-thin p-3'>Hand-crafted and personally chosen from the best for you</h1>
      <div className='grid grid-cols-4 gap-4'>
        <div>
          <img src="https://dailydhaga.com/cdn/shop/files/10_15bbcb62-a246-4ca9-a68b-eff6bc4d6826.png?v=1741103500&width=533 "></img>
          <p className='text-lg font-extralight'>  Velvet Bloom Co-ord Set </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
        <div>
          <img src="https://dailydhaga.com/cdn/shop/files/71_6fea5176-ef80-4d81-b52c-6957bdf1d9ac.png?v=1729181387&width=533 "></img>
          <p className='text-lg font-extralight'>  Celestial Floral Georgette Suit </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
        <div>
          <img src="https://dailydhaga.com/cdn/shop/files/175_8675219d-d600-4f02-98e5-d1ca36b94923.png?v=1722434722&width=533"></img>
          <p className='text-lg font-extralight'> Bandhani Grace Chinon Anarkali Set </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
        <div>
          <img src="https://dailydhaga.com/cdn/shop/files/119_e19deadc-dd91-42a4-859a-bb0cb7bc211f.png?v=1729100538&width=533"></img>
          <p className='text-lg font-extralight'>  Pink Petal Handblock Set </p>
          <p className='text-lg font-extralight '>
            <span className='text-lg font-extralight line-through'> Rs. 2,995.00</span>

            <span className='text-lg font-extralight'> Rs. 2,295.00</span>
          </p>
        </div>
      </div>
      
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
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <h1 className='text-center text-5xl font-thin p-6'> Why Choose Us </h1>
      <div className='grid grid-cols-4 gap-8 px-6'>
        <div className="bg-gray-50 p-8 text-center flex flex-col items-center justify-center">
          <img
            src="https://img.freepik.com/premium-vector/vector-design-affordable-pricing-icon-style_1134108-111397.jpg"
            className="w-20 h-20"
          />
          <h3 className="text-xl font-medium">
            Reasonable Pricing
          </h3>
          <p className="text-gray-600">
            We strive to offer the most affordable and competitive rates to our valued clients.
          </p>
        </div>
        <div className="bg-gray-50 p-8 text-center flex flex-col items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8Pxc_d58zrnrKwDi26IKR6F9HTRRlacF5Q&s"
            className="w-20 h-20"
          />
          <h3 className="text-xl font-medium">
            Premium Quality Fabric
          </h3>
          <p className="text-gray-600">
            We use high quality fabrics to ensure utmost comfort and durability of our garments.
          </p>
        </div>
        <div className="bg-gray-50 p-8 text-center  flex flex-col items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/591/591861.png"
            className="w-20 h-20"
          />
          <h3 className="text-xl font-medium">
            Easy Exchange
          </h3>
          <p className="text-gray-600">
            We understand that fabric & fit can vary, so we offer easy 10-day exchange or return.
          </p>
        </div>
        <div className="bg-gray-50 p-8 text-center flex flex-col items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/206/240/small_2x/fast-delivery-icon-free-vector.jpg"
            className="w-20 h-20"
          />
          <h3 className="text-xl font-medium">
            Free Shipping
          </h3>
          <p className="text-gray-600">
            Free shipping on all prepaid orders. No minimum purchase required!
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='flex items-center justify-between'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW4cNT2hrA77S-KcU6dU87omJcTSvmIrHfA&s"></img>
        <div className='flex-row'>
          <h1 className='font-semibold'> About us </h1>
          <h2> Our Journey</h2>
          <h2>FAQs</h2>
          <h2>Contact us</h2>
        </div>
        <div className='flex-row'>
          <h1 className='font-semibold'> Shop </h1>

          <h2>Navratri Collection</h2>
          <h2>Kurtis</h2>
          <h2>Pant Sets</h2>
          <h2>Dupatta sets</h2>
          <h2>Dresses</h2>
          <h2>Co ord sets</h2>
          <h2>Tops</h2>
        </div>
        <div className='flex-row'>
          <h1 className='font-semibold'>Quick links</h1>
          <h2>Terms & Conditions</h2>
          <h2>Privacy Policy</h2>
          <h2>Return & Exchange</h2>
          <h2>Shipping Policy</h2>
        </div>
      </div>
    </div>
  )
}
export default Header