import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bgchange from "./bgchange.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bgchange />

  </StrictMode>,
)
