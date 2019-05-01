import React from 'react'
import ThemeSelector from '../ThemeSelector/ThemeSelector.js'
import LivePrices from '../LivePrices/LivePrices.js'
import './NavBar.css'

const NavBar = (props) => {
  const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
  return (
    <div className="bar-nav-container" role="navigation" style={{ opacity: opacity, background: props.background}}>
      <div className='bar-nav-div'>
        <h2 className='bar-main-heading'>Trading MACD</h2>
        <LivePrices/>
        <div className='bar-links'>
          <div className='links-wrapper'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <ThemeSelector themeToggle={props.themeToggle} handleChange={props.handleChange}/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar