import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.jsx'
import Parent1 from './Parent1.jsx'
import Parent2 from './Parent2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Parent />
   
    <Parent1 />
    
    <Parent2 />
    
  </StrictMode>,
)
