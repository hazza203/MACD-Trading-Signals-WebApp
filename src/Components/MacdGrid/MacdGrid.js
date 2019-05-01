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
			coins: []
		}
		this.handleChange = this.handleChange.bind(this);
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

	render(){
		const {coins} = this.state
		
		return (
			<div className='container'>
				<Selectors handleChange={this.handleChange} time={this.state.time} sign={this.state.sign}/>
				<div className='table-container'>
					<table className='macd-table'>
						<tbody>
							<tr className='macd-table-header'>
								<th>Coin Pair</th>
								<th>5m</th>
								<th>15m</th>
								<th>30m</th>
								<th>1h</th>
								<th>2h</th>
								<th>4hr</th>
								<th>6hr</th>
								<th>12hr</th>
								<th>1d</th>
								<th>3d</th>
								<th>1w</th>
								<th>Price</th>
								<th>24hr Change</th>
								<th>Vol Change</th>
							</tr>
							{ 
								typeof coins != 'undefined' ?
									coins.map((coin) => 
										<CoinRow coin={coin} />
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