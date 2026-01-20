import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Addtocart from './addtocart';
import Imagecounter from "./imagecounter";
import Csschange from "./csschange";
import Useeffect1 from "./useeffect1";
import Useeffect2 from "./useeffect2";
import Useeffect3 from "./useeffect3";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Addtocart />
    <Imagecounter />
    <Csschange />
    <Useeffect1 />
    <Useeffect2 />
    <Useeffect3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
