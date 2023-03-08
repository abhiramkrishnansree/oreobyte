import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Screen from './components/Screen'

const Webview = () => {
  return (
    <div className='Mainview'>
        <div className='Nav-style'><Navbar/></div>
        <Screen/>
    </div>
  )
}

export default Webview