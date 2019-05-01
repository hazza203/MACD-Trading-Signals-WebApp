import React from 'react'
import './ScrollerCell.css'

const ScrollerCell = ({name, price, style}) => {

	const tryRequire = (name) => {
	  try {
	  	name = name.toLowerCase()
	  	
	   const img = require(`../../../../cryptoIcons/${name}.svg`);
	   return img
	  } catch (err) {
	  	console.log(err)
	   return null;
	  }
	}

	return (
		<div className='item-container'>
			<img className='coin-img' src={tryRequire(name)}/>
			<div className='coin-img'>
				<span className='span-name'>{name}</span>
				<span className='span-name' style={style}>${parseFloat(price).toFixed(2)}</span>	
			</div>		
		</div>
	)
}

export default ScrollerCell