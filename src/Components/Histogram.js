import React, { Component } from 'react';
import Axes from './Axes';
import '../Css/Histogram.css';

class Histogram extends Component {

	constructor() {
		super();
		this.state = {
			frequency: []
		}
	}

	render() {
		let aa = 50;
		let data = this.props.data;
		let alphabet_labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
						 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		let frequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let size = [];
		let max = 0, maxIndex;
		let histogram_items = [];
		let xAxisLabel = [];
		data.map(d => {
			alphabet_labels.map( (alpha, index) => {
				if( alpha === d.name[0])
					frequency[index]++ ;
			})
		});
		xAxisLabel = alphabet_labels.map( alpha => {
			return (<div className='Histogram--label'>
				{alpha}
			</div>);
		});
		for (let i=0;i<frequency.length;i++)
		{
			if(max < frequency[i]){
				max = frequency[i];
				maxIndex = i;
			}
		}
		histogram_items = frequency.map( (f, index)=> {
			let style = {
				height: (f/max * 100) + '%'
			}
			return (
					<div className='Histogram--item' key={alphabet_labels[index]} style={style} >
						
					</div>
					);
		})
		return(
			<div>
				<div className='Histogram'>
					<Axes max={max} labels={alphabet_labels} style={{ padding: "10px", position: "absolute",  zIndex: "0", top: "0px", left: "0px", height: "350px" }}/>
					<div style={{ marginLeft: "30px", padding: "10px", position: "absolute",  zIndex: "1", top: "0px", left: "0px", height: "350px" }} >
					{histogram_items}
					</div>
				</div>
				<div style={{marginLeft: "40px", position: "relative"}}>
					{xAxisLabel}
				</div>
				<br />
				<div style={{marginLeft: "40px"}}>
					<strong>Max: </strong>{max} student-names start with the letter {alphabet_labels[maxIndex]}
				</div>
			</div>
			);
	}
}

export default Histogram;