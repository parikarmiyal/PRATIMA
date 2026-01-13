import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Navbar from "./navbar";
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>}></Route>
      </Routes>
     </Router>
    </div>
  )
}
export default App;
