import React, { Component } from 'react';
import Donut from './Donut';
class Time extends Component {

	constructor() {
		super();
		this.state ={
			value: [0,0,0]
		} 
	}

	componentDidMount() {
		this.updateTime();
		setInterval(this.updateTime.bind(this), 1000);
	}

	updateTime() {
		let date = new Date();
		this.setState({
			value: [date.getHours(), date.getMinutes(), date.getSeconds()]
		});
	}

	render() {
		// console.log(this.state.value);
		let value = this.state.value;
		let donuts = value.map( (item, index) => {
			return (
				<Donut value={item} key={index} index={index}/>
				);
		});

		return(
			<div style={ {textAlign: "center"} }>
			<div style={ {display: "inline-block"} }>
			{donuts}
			</div>
			</div>
			);
	}
}

export default Time;