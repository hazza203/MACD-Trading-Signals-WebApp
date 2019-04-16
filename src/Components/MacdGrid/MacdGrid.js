import React from 'react'
import Selectors from '../Selectors/Selectors.js'
import './MacdGrid.css'

class MacdGrid extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			time: '1hr',
			sign: 'BTC'
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
 		switch(event.target.name){
			case 'time':
			  this.setState({time: event.target.value})
			  break	
			case 'sign':
				this.setState({sign: event.target.value})
				break
 		}
	}

	render(){
		return (
			<div className='container'>
				<Selectors handleChange={this.handleChange} time={this.state.time} sign={this.state.sign}/>
				<div className='table-container'>
					<table className='macd-table'>
						<tr className='macd-table-header'>
							<th>Coin Pair</th>
							<th>5m</th>
							<th>15m</th>
							<th>30m</th>
							<th>1h</th>
							<th>4hr</th>
							<th>6hr</th>
							<th>12hr</th>
							<th>1d</th>
							<th>3d</th>
							<th>Price</th>
							<th>24hr Change</th>
							<th>Vol Change</th>
						</tr>
					</table>
				</div>
			</div>
	)
	}
}

export default MacdGrid