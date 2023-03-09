import React from 'react'
import { Link } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { CiPen } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";

const Screen2 = () => {
  return (
    <div className='screen2-container'>
      <div className='flexer'>
      <div className='services'>
        < CiCamera size={100} className="hell"/>
        <h1 className='heading'>Finest Quality</h1>
        <p className='para'>we use only the finest ingredients in all our cookie recipes. We believe that the quality
         of the ingredients directly affects the taste and texture of the final product.
         We take pride in our cookies and are confident that you will taste the difference in every bite.</p>
        <Link to="/"><span>Click for more</span></Link>
      </div>

      <div className='services'>
        <CiPen size={100} className="hell"/>
        <h1 className='heading'>Homely Taste</h1>
        <p className='para'> we strive to create cookie recipes that evoke the warmth and comfort of home. 
        We believe that the best cookies are those that not only taste great, but also bring back happy memories and feelings of nostalgia. </p>
        <Link to="/"><span>Click for more</span></Link>
      </div>

      <div className='services'>
        <CiPizza size={100} className="hell"/>
        <h1 className='heading'>Delivery</h1>
        <p className='para'>we understand that receiving your cookies in a timely and fresh manner is important to you.
         That's why we offer convenient and reliable delivery options for our customers.  </p>
        <Link to="/"><span>Click for more</span></Link>
      </div>
      </div>
    </div>
  )
}

export default Screen2