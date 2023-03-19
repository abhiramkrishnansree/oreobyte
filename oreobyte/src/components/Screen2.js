import React from 'react'
import { Link } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { CiPen } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";

const Screen2 = () => {
  return (
    <div className='screen2-container' id='service'>
      <div className='flexer'>
      <div className='services'>
        < CiCamera size={100} className="hell"/>
        <h1 className='heading'>Finest Quality</h1>
        <p className='para'>we strive to create cookie recipes that evoke the warmth and comfort of home. 
        We believe that the best cookies are those that not only taste great, but also bring back happy memories and feelings of nostalgia.</p>
        <button><span>Click for more</span></button>
      </div>

      <div className='services'>
        <CiPen size={100} className="hell"/>
        <h1 className='heading'>Homely Taste</h1>
        <p className='para'> we strive to create cookie recipes that evoke the warmth and comfort of home. 
        We believe that the best cookies are those that not only taste great, but also bring back happy memories and feelings of nostalgia. </p>
        <button><span>Click for more</span></button>
      </div>

      <div className='services'>
        <CiPizza size={100} className="hell"/>
        <h1 className='heading'>Delivery</h1>
        <p className='para'>we strive to create cookie recipes that evoke the warmth and comfort of home. 
        We believe that the best cookies are those that not only taste great, but also bring back happy memories and feelings of nostalgia.</p>
         <button><span>Click for more</span></button>
      </div>
      </div>
    </div>
  )
}

export default Screen2