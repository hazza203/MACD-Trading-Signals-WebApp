import React from 'react'
import './CoinCell.css'
import upArrow from './up-arrow.png'
import downArrow from './down-arrow.png'
import dblUpArrow from './dbl-up-arrow.png'
import dblDownArrow from './dbl-down-arrow.png'
import horizontalLine from './horizontal-line.png'

const CoinCell = (period) => {

	let className = ''
	let arrow = horizontalLine

	const cellClass = () => {
		if(period.period.distance > 0){
			className = 'up-cell'
			if(period.period.distance > 50){
				className = 'dbl-up-cell'
			}
		} else if(period.period.distance < 0){
			className = 'down-cell'
			if(period.period.distance < -50){
				className = 'dbl-down-cell'
			}
		}

		return className
	}

	const imgSrc = () => {
		if(period.period.pctSignalChange > 0){
			arrow = upArrow
			if(period.period.pctSignalChange > 50){
				arrow = dblUpArrow
			}
		} else if(period.period.pctSignalChange < 0){
			arrow = downArrow
			if(period.period.pctSignalChange < -50){
				arrow = dblDownArrow
			}
		}

		return arrow
	}

	const hasVergence = () => {
		if(period.period.vergence === true)
			return 'vergence-cell'
		else {
			return 'non-vergence-cell'
		}
	}

	return(

		<td className='td-cell'>
			<div className={`${hasVergence()}`}>
				<div className={`cell ${cellClass()}`}>
					<img className='arrow' src={imgSrc()}/>
				</div>
			</div>
		</td>
	)
}

export default CoinCell
