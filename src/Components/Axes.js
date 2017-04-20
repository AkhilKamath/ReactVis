import React, { Component } from 'react';

class Axes extends Component {

	render() {
		let division = this.props.max / 7; //since there are 8 labels on y-axis
		let yHeight = ["350", "300", "250", "200", "150", "100", "50", "0"];
		let yAxisLabel = [];
		for (let i=0; i<8; i++) {
			yAxisLabel[i] = Math.round(division * i); //approximate value
		}
		let xAxisParallelLines = yAxisLabel.map( (label, index) => {
			return (
					<svg>
						<line x1="30" x2="870" y1={yHeight[index]} y2={yHeight[index]} style={{ stroke: "#999", strokeWidth: "1px", strokeDasharray: "10,10" }}/>
						<text x="0" y={yHeight[index]} fontFamily="sans-serif" fontSize="12px">{yAxisLabel[index]}</text>
						{console.log(yAxisLabel[index])}
					</svg>
				);
		})

		return (
			<svg height="350px" width="870px">
				{xAxisParallelLines}
				<line x1="30" x2="30" y1="350" y2="0"
					  style={{ stroke: "#000", strokeWidth: "2px" }}
				/>
				<line x1="30" x2="870" y1="350" y2="350"
					  style={{ stroke: "#000", strokeWidth: "2px" }}
				/>

			</svg>
			);
	}
}

export default Axes;