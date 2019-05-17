import React from 'react'
import Selectors from '../Selectors/Selectors.js'
import CoinRow from '../CoinRow/CoinRow.js'
import './MacdGrid.css'

class MacdGrid extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			time: '1hr',
			sign: 'BTC',
			coins: [],
			sortType: '',
			sortDirection: '',
			showArrows: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleCheckChange = this.handleCheckChange.bind(this)
		this.getFloat = this.getFloat.bind(this)
		this.sortCoins = this.sortCoins.bind(this)
	}

	componentDidMount(){
		fetch(`https://macd-trading-signals-server.herokuapp.com/${this.state.sign}`)
		.then(response => response.json())
		.then(data => {
			this.setState({coins: data})
		})
	}


	handleChange(event) {
 		switch(event.target.name){
			case 'time':
			  this.setState({time: event.target.value})
			  break	
			case 'sign':
				if(event.target.value === 'ALL'){
					this.setState({sign: event.target.value})
					fetch(`https://macd-trading-signals-server.herokuapp.com/`)
					.then(response => response.json())
					.then(data => {
						this.setState({coins: data})
					})
				} else {
					this.setState({sign: event.target.value})
					fetch(`https://macd-trading-signals-server.herokuapp.com/${event.target.value}`)
					.then(response => response.json())
					.then(data => {
						this.setState({coins: data})
					})
				}
				break
			default:
				break
 		}
	}

	handleCheckChange(event) {
		if(this.state.showArrows === true){
			this.setState({showArrows: false})
		} else {
			this.setState({showArrows: true})
		}
	}

	sortCoins(sortMethod, secondKey=''){
		let coins = this.state.coins
		const getFloat = this.getFloat

		if(this.state.sortType === sortMethod){
			if(this.state.sortDirection === 'up'){
				coins.sort(function(a, b) {
					if(getFloat(a, sortMethod, secondKey) > getFloat(b, sortMethod, secondKey)){
						return 1
					}
					if(getFloat(a, sortMethod, secondKey) < getFloat(b, sortMethod, secondKey)){
						return -1
					}
					return 0
				})
				this.setState({sortDirection: 'down'})
			} else {
				coins.sort(function(a, b) {
					if(getFloat(a, sortMethod, secondKey) > getFloat(b, sortMethod, secondKey)){
						return -1
					}
					if(getFloat(a, sortMethod, secondKey) < getFloat(b, sortMethod, secondKey)){
						return 1
					}
					return 0
				})
				this.setState({sortDirection: 'up'})
			}
		} else {
			coins.sort(function(a, b) {
				if(getFloat(a, sortMethod, secondKey) > getFloat(b, sortMethod, secondKey)){
					return -1
				}
				if(getFloat(a, sortMethod, secondKey) < getFloat(b, sortMethod, secondKey)){
					return 1
				}
				return 0
			})
			this.setState({sortType: sortMethod})
			this.setState({sortDirection: 'up'})
		}
		
		this.setState({coins: coins})
	}

	getFloat(obj, key, secondKey){
		if(secondKey === 'distance'){
			console.log(obj[key])
			return parseFloat(obj['periods'][key][secondKey])
		} else {
			return parseFloat(obj[key])
		}
	}

	render(){
		const {coins, showArrows} = this.state
		
		return (
			<div className='container'>
				<Selectors handleChange={this.handleChange} handleCheckChange={this.handleCheckChange} time={this.state.time} sign={this.state.sign}/>
				<div className='table-container'>
					<table className='macd-table'>
						<tbody>
							<tr className='macd-table-header'>
								<th>Coin Pair</th>
								<th onClick={() => this.sortCoins('m5', 'distance')}>5m</th>
								<th onClick={() => this.sortCoins('m15', 'distance')}>15m</th>
								<th onClick={() => this.sortCoins('m30', 'distance')}>30m</th>
								<th onClick={() => this.sortCoins('h1', 'distance')}>1h</th>
								<th onClick={() => this.sortCoins('h2', 'distance')}>2h</th>
								<th onClick={() => this.sortCoins('h4', 'distance')}>4hr</th>
								<th onClick={() => this.sortCoins('h6', 'distance')}>6hr</th>
								<th onClick={() => this.sortCoins('h12', 'distance')}>12hr</th>
								<th onClick={() => this.sortCoins('d1', 'distance')}>1d</th>	
								<th onClick={() => this.sortCoins('d3', 'distance')}>3d</th>
								<th onClick={() => this.sortCoins('w1', 'distance')}>1w</th>
								<th onClick={() => this.sortCoins('price')}>Price</th>
								<th onClick={() => this.sortCoins('change')}>24hr Change</th>
								<th onClick={() => this.sortCoins('volume')}>Volume</th>
							</tr>
							{ 
								typeof coins != 'undefined' ?
									coins.map((coin) => 
										<CoinRow coin={coin} showArrows={showArrows}/>
									) 
									: null
							}
						</tbody>
					</table>
				</div>
			</div>
	)
	}
}

export default MacdGrid