import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import React, { useState } from "react";
function Chgimg() {
const [image, setImage] = useState(image1);
function changeimage() {
setImage(image2);
}
return (
    <div>
<img src={image} alt="img1" height="200px" width="300px" />
<button onClick={changeimage}>Change Image</button>
</div>
);
}
export default Chgimg;
