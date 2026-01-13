/*import React from "react";
function App(props){
  
  return (
    <div>
      <h1>
        my name is {props.name} and my age is {props.age}
      </h1>
    </div>
  );
}
export default App;
*/
// INLINE STYLE 
/*
import { React } from "react";
import "./App.css"
export default function App()
{
  return(
<h1 className="mystyle">
      GOOD MORNING
  </h1>
  );
}
  
import {React} from "react";
import "./App.css";
export default function App(props){
  
  return (
    <>
    <h1 style={{ color: "black", textAlign: "center" }}>
  Departments
</h1>

<div className="container">
  <div className="card">
    <h2>Computer Engineering</h2>
    <p>
      Computer Engineering is a four year undergraduate programme
      introducing its students to realms of computer, including the
      theory and design of data storage, software operating systems.
    </p>
    <button>Apply Now</button>
  </div>
  <div className="card">
      <h2>IT Engineering</h2>
      <p>
        Information Technology is an undergraduate engineering course
        which focuses on expanding and growing in terms of dissemination
        of knowledge within and outside curriculum and skill development
        activities.
      </p>
      <button>Apply Now</button>
    </div>

        <div className="card">
          <h2>Computer Science</h2>
          <p>
            Computer Engineering with ML & AI is a 4-year undergraduate
            specialization programme that presents a solid foundation in
            principles and technologies to get on the path of an exciting,
            sprouting career.
          </p>
          <button>Apply Now</button>
        </div>
</div>
</>
  
    
    
    
  );
}

import React from "react";
import "./App.css";
function App(){
  
  return (
    
   <>
   <h1 style={{color:"black", textAlign:"center"}}>IMAGE GALLERY</h1>
   <div className="container">
        
        <div className="card">
      <img height="200px" width="300" src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" ></img>
        <p className="para">Nature</p>
        <button c >Explore</button>
        </div>
        <div className="card">
      <img height="200px" width="300" src="https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=" ></img>
        <p className="para">Travel</p>
        <button>Explore</button>
        </div>
        <div className="card">
      <img height="200px" width="300" src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg" ></img>
        <p className="para">Animal</p>
        <button>Explore</button>
        </div>
    </div>
   </>
  );
  
}
export default App
*/
import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Blaupunkt ",
      description:"just 34999",
      price: "₹39,999",
      oldPrice: "₹59,999",
      image:
        "https://sharptronics.in/cdn/shop/products/elistaledsf43eba06black_base.jpg?v=1664967270",
    },
    {
      id: 2,
      name: "Samsung ",
      description:"just 34999",
      price: "₹72,990", 
      oldPrice: "₹86,990",
      image:
        "https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1750330801",
    },
    {
      id: 3,
      name: "Samsung ",
      description:"just 34999",
      price: "₹40,999",
      oldPrice: "₹65,000",
      image:
        "https://m.media-amazon.com/images/I/71UXAXZwFLL.jpg",
    },
    {
      id: 4,
      name: "Samsung ",
      description:"just 34999",
      price: "₹77,990",
      oldPrice: "₹1,14,990",
      image:
        "https://m.media-amazon.com/images/I/71UXAXZwFLL.jpg",
    },
    {
      id: 5,
      name: "Samsung ",
      description:"just 34999",
      price: "₹77,990",
      oldPrice: "₹1,14,990",
      image:
        "https://m.media-amazon.com/images/I/71UXAXZwFLL.jpg",
    },
    {
      id: 6,
      name: "Samsung ",
      description:"just 34999",
      price: "₹77,990",
      oldPrice: "₹1,14,990",
      image:
        "https://m.media-amazon.com/images/I/71UXAXZwFLL.jpg",
    }
  ];

  return (
    <div className="app">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <p className="product-name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="price">
              {product.price}
              <span className="old-price">{product.oldPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;