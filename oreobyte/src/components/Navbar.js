import React from 'react'
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShowComponent = () => {
    setShowComponent(true);
  };

  const handleHideComponent = () => {
    setShowComponent(false);
  };
  return (
    <>
    <div className='navbar-container'>
     <Link to="/kuthara" className='nav-logo'><img src="Logo.png"/></Link>
     <div className='navbar-menu'>
     <li className='a'><a href="#home"  style={{fontSize:"18px",textDecoration:"none"}}>Home</a></li>
     <li className='a'><a href="#service" style={{fontSize:"18px",textDecoration:"none"}}>Service</a></li>
     <li className='a'><a href="#about" style={{fontSize:"18px",textDecoration:"none"}}>About</a></li>
     <li className='a'><a href="#product" style={{fontSize:"18px",textDecoration:"none"}}>Products</a></li>
     <div className='openBtn' id=''><HiMenu onClick={handleShowComponent} size={30} color='white'/></div>
     </div>
    </div>
    {showComponent &&
    <div className='sidebar-container' id="mySidepanel">
      <div className='closebtn' onclick="closeNav()"></div>
     <div className='sidebar-menu'>
     <li className='a' onClick={handleHideComponent}><a href="#home"  >Home</a></li>
     <li className='a' onClick={handleHideComponent}><a href="#service" >Service</a></li>
     <li className='a' onClick={handleHideComponent}><a href="#about" >About</a></li>
     <li className='a' onClick={handleHideComponent}><a href="#product" >Products</a></li><RxCross1 onClick={handleHideComponent} size={30} color='white'/>
     </div>
    </div>
    }
    </>
  )
}

export default Navbar