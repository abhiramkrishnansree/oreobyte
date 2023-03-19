import React from 'react'
import Navbar from './components/Navbar'
import Screen from './components/Screen'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'
import Screen5 from './components/Screen5'

const Webview = () => {
  return (
    <div className='Mainview'>
        <div className='Nav-style'><Navbar/></div>
        <Screen/>
        <Screen2/>
        <Screen3/>
        <Screen5/>
        <Screen4/>
    </div>
  )
}

export default Webview