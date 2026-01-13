import { Link } from "react-router-dom";
import './App.css'
function Navbar(){
    return (
        <div className="abc">
            <div className="pqr">
            <img height="200px" width="200px" src="https://images.scalebranding.com/cool-a-logo-50afaa14-6473-4b28-b9c5-e08d50d8e7da.jpg"></img>
            
            </div>
            <div>
                <Link className="xyz" to="/">HOME</Link>
                <Link className="xyz" to="/menu">MENU</Link>
                <Link className="xyz" to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}
export default Navbar;