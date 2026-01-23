import React,{useState} from "react";
function Readmore(){
  const text = "Your website, OTA listings, metasearch, social media: the greater your online presence, the more business your hotel will win. Use the SiteMinder channel manager to bring all your booking channels together in one portal, for more efficient managemen";
  const [showfulltext,setshowfulltext]=useState(false);
  const readmore=()=>{
    setshowfulltext(!showfulltext);
  }
  return (  
    <div>
      <p>{showfulltext?text:text.substring(0,50)+"..."}</p>
      <button onClick={readmore}>{showfulltext?"read less " : "read more "}</button>
    </div>
  )
}
export default Readmore;