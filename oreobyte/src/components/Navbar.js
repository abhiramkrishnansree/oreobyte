import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <>
    <div className='navbar-container'>
     <Link to="/kuthara" className='nav-logo'><img src="Logo.png"/></Link>
     <div className='navbar-menu'>
     <li className='a'><a href="#"  style={{fontSize:"18px",textDecoration:"none"}}>Home</a></li>
     <li className='a'><a href="#" style={{fontSize:"18px",textDecoration:"none"}}>Service</a></li>
     <li className='a'><a href="#" style={{fontSize:"18px",textDecoration:"none"}}>About</a></li>
     <li className='a'><a href="#" style={{fontSize:"18px",textDecoration:"none"}}>Products</a></li>
     </div>
    </div>
    </>
  )
}

export default Navbar