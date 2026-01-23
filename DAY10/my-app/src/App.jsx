
import React, { useState } from "react";
import imagesData from "./data";

function ImageFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredImages =
    selectedCategory === "all"
      ? imagesData
      : imagesData.filter(
          (image) => image.category === selectedCategory
        );

  return (
    <div>
      <h2>Image Gallery</h2>

      {/* Filter Buttons */}
      <div >
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("nature")}>Nature</button>
        <button onClick={() => setSelectedCategory("food")}>Food</button>
        <button onClick={() => setSelectedCategory("animals")}>Animals</button>
      </div>

      {/* Image Grid */}
      <div>
        {filteredImages.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.title}
              width="200"
              height="150"
              
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageFilter;
