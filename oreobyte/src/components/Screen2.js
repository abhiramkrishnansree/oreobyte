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
        <h1 className='heading'>Entertainment</h1>
        <p className='para'>This service is given to our costomers for there entertainm
        ent more details are avilable on thecontinuation blogs</p>
        <Link to="/"></Link>
      </div>

      <div className='services'>
        <CiPen size={100} className="hell"/>
        <h1 className='heading'>Education</h1>
        <p className='para'>This service is given to our costomers for there entertainm
        ent more details are avilable on thecontinuation blogs</p>
        <Link to="/"></Link>
      </div>

      <div className='services'>
        <CiPizza size={100} className="hell"/>
        <h1 className='heading'>Resturents</h1>
        <p className='para'>This service is given to our costomers for there entertainm
        ent more details are avilable on thecontinuation blogs</p>
        <Link to="/"></Link>
      </div>
      </div>
    </div>
  )
}

export default Screen2