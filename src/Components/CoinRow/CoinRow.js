import React from 'react'
import CoinCell from './CoinCell/CoinCell.js'
import './CoinRow.css'


const CoinRow = ({coin, showArrows}) => {

	const tryRequire = (coin) => {
	  try {
	  	let symbol = ''
	  	
	  	if(coin.quoteAsset === 'BTC'){
	  		symbol = coin.symbol.toLowerCase()
	  		symbol = symbol.replace('btc', '')
	  	} else if(coin.quoteAsset === 'ETH'){
	  		symbol = coin.symbol.toLowerCase()
	  		symbol = symbol.replace('eth', '')
	  	} else if(coin.quoteAsset === 'USDT'){
	  		symbol = coin.symbol.toLowerCase()
	  		symbol = symbol.replace('usdt', '')
	  	}

	  	
	   const img = require(`../../cryptoIcons/${symbol}.svg`);
	   return img
	  } catch (err) {
	  	console.log(err)
	   return null;
	  }
	}

	return (
		<tr className='coin-row'>
			<td className='symbol-td'>
				<span className='helper'>
				{
					tryRequire(coin) ? <img src={tryRequire(coin)} alt={`${coin.symbol} logo`} className='logo'/> : null
				}

				</span>
				<span className='symbol-name'>
					{coin.symbol}
				</span>
			</td>
			{
				Object.keys(coin.periods).map(key =>
						<CoinCell	key={`${coin.symbol}${key}`} period={coin.periods[key]} showArrows={showArrows}/>
					)
			}
			<td>{coin.price}</td>
			<td>{coin.change}%</td>
			<td>0</td>	
		</tr>
	)
}


export default CoinRow