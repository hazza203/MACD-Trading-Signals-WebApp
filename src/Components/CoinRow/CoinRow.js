import React from 'react'
import CoinCell from './CoinCell/CoinCell.js'
import './CoinRow.css'


const CoinRow = ({coin}) => {

	return (
		<tr className='coin-row'>
			<td>{coin.symbol}</td>
			{
				Object.keys(coin.periods).map(key =>
						<CoinCell	key={`${coin.symbol}${key}`} period={coin.periods[key]} />
					)
			}
			<td>{coin.price}</td>
			<td>{coin.change}%</td>
			<td>0</td>	
		</tr>
	)
}


export default CoinRow