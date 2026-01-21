import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './todolist.jsx'
import TodoList2 from "./todolist2.jsx";
import Edittodolist from "./edittodolist.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      
    <Edittodolist />
  </StrictMode>,
)
