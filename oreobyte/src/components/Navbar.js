import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <>
    <div className='navbar-container'>
     <Link to="/kuthara" className='nav-logo'><img src="Logo.png"/></Link>
     <div className='navbar-menu'>
     <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Home</Link>
     <Link to="/kuthara" className='a' style={{color:"White",fontSize:"18px",textDecoration:"none"}}>Club</Link>
     <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Services</Link>
     <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Contact</Link>
     </div>
    </div>
    </>
  )
}

export default Navbar