import React from 'react' 
import './LivePrices.css'
import ScrollerCell from './ScrollerCell/ScrollerCell.js'

class LivePrices extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			elements: ['ENJ', 'BAT', 'BTC', 'ETH', 'BNB', 'EOS', 'LTC', 'ENJ', 'BAT', 'BTC', 'ETH'],
			BTC: 0,
			ETH: 0,
			BNB: 0,
			EOS: 0,
			LTC: 0, 
			ENJ: 0,
			BAT: 0,
			BTCStyle: {
				color: 'grey'
			},
			ETHStyle: {
				color: 'grey'
			},
			EOSStyle: {
				color: 'grey'
			},
			BNBStyle: {
				color: 'grey'
			},
			LTCStyle: {
				color: 'grey'
			},
			ENJStyle: {
				color: 'grey'
			},
			BATStyle: {
				color: 'grey'
			},

			intervalId: 0
		}

		this.fetchPrices = this.fetchPrices.bind(this)
	}

	componentDidMount(){
		this.fetchPrices()
		var intervalId = setInterval(this.fetchPrices, 1000);
   	// store intervalId in the state so it can be accessed later:
   	this.setState({intervalId: intervalId});	
	}

	componentWillUnmount(){
  	// use intervalId from the state to clear the interval
   	clearInterval(this.state.intervalId);
	}

	fetchPrices(){
		for(const symbol in this.state){
			if(symbol === 'intervalId' || symbol.includes('Style') || symbol === 'elements'){
				continue
			} 

			fetch(`https://cors-anywhere.herokuapp.com/https://api.binance.com/api/v1/ticker/24hr?symbol=${symbol}USDT`)
			.then(response => response.json())
			.then(data => {
				if(data.lastPrice > this.state[symbol]){
					this.setState({[`${symbol}Style`]:{color:'#00ff00'}})
				} else if(data.lastPrice < this.state[symbol]){
					this.setState({[`${symbol}Style`]:{color:'#ff0000'}})
				} else {
					
				}
				this.setState({[`${symbol}`]: data.lastPrice})
			})
		}
	}

	render(){
		const {elements} = this.state
		return(
			<div className='scrolling-price-container'>
				<div className='scroller'>
					{
						typeof elements != 'undefined' ?
							elements.map((coin) => 
								<ScrollerCell name={coin} price={this.state[coin]} style={this.state[`${coin}Style`]}/>
							)
							: null
					}
				</div>
			</div>
		)
	}
}

export default LivePrices