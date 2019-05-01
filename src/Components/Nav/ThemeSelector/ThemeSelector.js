import React from 'react'
import './ThemeSelector.css'

const ThemeSelector = (props) => {

	return(
		<div className="toggleWrapper">
		  <input type="checkbox" className={`dn${props.id}`} id={`dn${props.id}`} onChange={props.handleChange} checked={props.themeToggle}/>
		  <label htmlFor={`dn${props.id}`} className="toggle">
		    <span className="toggle__handler">
		      <span className="crater crater--1"></span>``
		      <span className="crater crater--2"></span>
		      <span className="crater crater--3"></span>
		    </span>
		    <span className="star star--1"></span>
		    <span className="star star--2"></span>
		    <span className="star star--3"></span>
		    <span className="star star--4"></span>
		    <span className="star star--5"></span>
		    <span className="star star--6"></span>
		  </label>
		</div>
	)

}

export default ThemeSelector