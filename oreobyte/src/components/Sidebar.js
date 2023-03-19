import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
    
  return (
    <>
    <div className='sidebar-container' id="mySidepanel">
      <div className='closebtn' onclick="closeNav()"></div>
     <div className='sidebar-menu'>
     <li className='a'><a href="#home"  >Home</a></li>
     <li className='a'><a href="#service" >Service</a></li>
     <li className='a'><a href="#about" >About</a></li>
     <li className='a'><a href="#product" >Products</a></li>
     </div>
    </div>
    </>
  )
}

export default Sidebar