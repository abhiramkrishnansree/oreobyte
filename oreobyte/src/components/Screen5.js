import React from 'react'
import { Link } from "react-router-dom";

const Screen5 = () => {
  return (
    <div className='screen5-container' id='product'>
      <h2 className='Heading'>Our Products</h2>
        <div className='gal'>
          <div class="row">

              <div class="column">
              <img src="cookieone.jpg"/>
              <img src="cookietwo.jpg"/>
              </div>

              <div class="column">
              <img src="cookiethree.jpg"/>
              <img src="cookiefour.jpg"/>
              </div>

              <div class="column">
              <img src="cookiefive.jpg"/>
              <img src="cookiesix.jpg"/>
              </div>

              <div class="column">
              <img src="cookieseven.jpg"/>
              <img src="cookieeight.jpg"/>
              </div>
          </div>

        </div>
  </div>
  )
}

export default Screen5