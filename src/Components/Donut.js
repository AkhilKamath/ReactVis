import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Css/Donutchart.css';

class Donut extends Component {

	static defaultProps = {
		value: 0,
		valuelabel: ["hours", "minutes", "seconds"],
		size: 140,
		strokewidth: 7
	}

	render() {

		let index = this.props.index;
		// console.log(index);
		// console.log("SEP");
		const halfsize = (this.props.size * 0.5);
		const radius = halfsize - (this.props.strokewidth * 0.5);
		const circumference = 2 * Math.PI * radius;
		const strokeval = ((this.props.value * circumference) / ((index === 0 ) ? 24 : 60 ));
		const dashval = (strokeval + ' ' + circumference);

		const trackstyle = {strokeWidth: this.props.strokewidth};
		const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
		indicatorstyle["stroke"] = ( (index === 0) ? "#db3236" : (index === 1)? "#f4c20d" : "#3cba54" );
		const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

		return(
			<svg width={this.props.size} 
				 height={this.props.size} 
				 className="Donutchart">
				<circle r={radius} 
						cx={halfsize} 
						cy={halfsize} 
						transform={rotateval} 
						style={trackstyle} 
						className="Donutchart-track"/>
				<circle r={radius} 
						cx={halfsize} 
						cy={halfsize} 
						transform={rotateval} 
						style={indicatorstyle} 
						className="Donutchart-indicator"/>						
				<text className="Donutchart-text" 
					  x={halfsize}
					  y={halfsize}
					  style={{textAnchor: 'middle'}}>
					<tspan className="Donutchart-text-val">
					{this.props.value}
					</tspan>
					<tspan className="Donutchart-text-label"
						   x={halfsize}
						   y={halfsize+15}>
						   {this.props.valuelabel[index]}
					</tspan>
				</text>
			</svg>
			);
		}
	}


Donut.propTypes = {
	value: PropTypes.number, 		//value of donut
	valuelabel: PropTypes.string, // label
	size: PropTypes.number, 		// diameter of donut 
	strokewidth: PropTypes.number	// width of donut
}

export default Donut;