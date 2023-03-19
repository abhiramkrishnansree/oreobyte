import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <>
    <div className='navbar-container'>
     <Link to="/kuthara" className='nav-logo'><img src="Logo.png"/></Link>
     <div className='navbar-menu'>
     <li className='a'><a href="#home"  style={{fontSize:"18px",textDecoration:"none"}}>Home</a></li>
     <li className='a'><a href="#service" style={{fontSize:"18px",textDecoration:"none"}}>Service</a></li>
     <li className='a'><a href="#about" style={{fontSize:"18px",textDecoration:"none"}}>About</a></li>
     <li className='a'><a href="#product" style={{fontSize:"18px",textDecoration:"none"}}>Products</a></li>
     </div>
     <div className='openBtn' id=''></div>
    </div>
    
    </>
  )
}

export default Navbar