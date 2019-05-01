import React from 'react'
import './Selectors.css'

const Selectors	 = ({handleChange, handleCheckChange, time, sign}) => {

	const timeArr = ['1m', '3m', '5m', '15m', '30m', '1h', '2hr', '4hr', '6hr', '12hr', '1d', '3d', '1w']
	const signArr = ['BTC', 'USDT', 'ETH', 'ALL']

	return (
		<div className='stylethediv'>
			<h3 className='grid-heading'>MACD Action</h3>
				<div className='selector-div'>
					
					<select className='selector selector1' name='time' value={time} onChange={handleChange}>
				   {timeArr.map(timeVal => 
			       <option className='select-options' key={timeVal} name={timeVal} value={timeVal}> {timeVal} </option>
		        )}
					</select>	
					<select className='selector selector2' name='sign' value={sign} onChange={handleChange}>
						{signArr.map(signVal => 
							<option name={signVal} key={signVal} value={signVal}> {signVal} </option>
						)}
					</select>
					<input className='checkbox' onChange={e => handleCheckChange(e)} type="checkbox" name="arrows" />
					<label className='checkbox' for="arrows">Display Arrows</label>
			</div>
		</div>
	)
	
}

export default Selectors