import React from 'react'
import { Link } from "react-router-dom";

const Screen3 = () => {
  return (
    <div className='screen3-container'>
      <div className='detail'>
        <img className='imager' src='cookie2.jpg'/>
        <div className='new'>
        <h1 className='heading'>About Us</h1>
        <p className='para'>
        Welcome to <span>Oreobyte</span>, a blog dedicated to all things cookies! We believe that there's nothing quite as
         satisfying as sinking your teeth into a warm, freshly-baked cookie, and that's what we aim to provide with 
         each and every recipe we share.
        <br></br><br></br>
At <span>Oreobyte</span>, we're passionate about all kinds of cookies - from classic chocolate chip to unique flavor
 combinations and everything in between. Our mission is to inspire and delight fellow cookie lovers with our
  easy-to-follow recipes, baking tips, and mouth-watering photos.
        <br></br><br></br>
Whether you're a seasoned baker or a newbie in the kitchen, we've got something for everyone.
 So come join us on this sweet journey and let's indulge in the delicious world of cookies together!
 <br></br><br></br>
        At <span>Oreobyte</span>, we are passionate about baking, especially when it comes to cookies. Our blog is 
        designed to inspire and educate cookie lovers from all over the world with our amazing collection of recipes 
        and baking tips. We are dedicated to making the baking process as fun and easy as possible, so you can enjoy the
         satisfying experience of creating homemade cookies.
        <br></br><br></br>
Our team of expert pastry chefs and food bloggers work tirelessly to create and curate 
a wide range of cookie recipes that cater to all tastes and preferences. We understand that everyone has 
their own unique palate, and that's why we have a diverse collection of recipes ranging from classic chocolate 
chip cookies to gluten-free, vegan, and keto-friendly options.
        </p>
        <br></br><br></br>
        <Link to="/Webview"><span>More Info</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Screen3