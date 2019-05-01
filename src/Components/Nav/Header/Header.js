import React from 'react'
import ThemeSelector from '../ThemeSelector/ThemeSelector.js'
import './Header.css'

const Header = (props) => (

	<div className='header'>
	  <div className="header-div" style={{ height: props.height}}>
	    <h2> MACD Signal Lobby </h2>
			<p> A trading tool to help you find MACD crossings on specific time frames</p>
			<span className='header-links'>
				<a href="/">Home</a>
      	<a href="/">About</a>
      </span>
			<ThemeSelector id='1' themeToggle={props.themeToggle} handleChange={props.handleChange}/>      
	  </div>
	 </div> 
)

export default Header