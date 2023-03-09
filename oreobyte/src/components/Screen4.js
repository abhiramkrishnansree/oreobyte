import React from 'react'
import { Link } from "react-router-dom";
import { AiFillSlackCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Screen4 = () => {
  return (
    <div className='screen4-container'>
      <div className='foot-top'>
      <div className='left'>
        <h3 className='foot'><span>Company</span></h3>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Service</Link>
        <Link to="/kuthara" className='a' style={{color:"White",fontSize:"18px",textDecoration:"none"}}>Club</Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Services</Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Contact</Link>
      </div>
      <div className='right'>
        <h3 className='foot'><span>Company</span></h3>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Service</Link>
        <Link to="/kuthara" className='a' style={{color:"White",fontSize:"18px",textDecoration:"none"}}>Club</Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Services</Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Contact</Link>
      </div>
      <div className='right'>
        <h3 className='foot'><span>Company</span></h3>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Service</Link>
        <Link to="/kuthara" className='a' style={{color:"White",fontSize:"18px",textDecoration:"none"}}>Club</Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Services</Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}>Contact</Link>
      </div>
      </div>
      <div className='lower'>
        <div className='icon-spot'>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}><AiFillSlackCircle size={30}/></Link>
        <Link to="/kuthara" className='a' style={{color:"White",fontSize:"18px",textDecoration:"none"}}><AiFillGoogleCircle size={30}/></Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}><AiFillRedditCircle size={30}/></Link>
        <Link to="/kuthara" className='a' style={{color:"white",fontSize:"18px",textDecoration:"none"}}><AiFillTwitterCircle size={30}/></Link>
        </div>
        <p>Company Oreobyte © 2023</p>
      </div>
    </div>
  )
}

export default Screen4