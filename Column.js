import React, { Component } from 'react';
import '../Css/Chart.css';
class Column extends Component {

	constructor() {
		super();
	}

	render() {

		let data = this.props.data;
		let color = this.state.color;
		let max = this.props.max;
		let stacked = this.props.stacked;
		return (


			<div className={ 'Chart--serie ' + (this.props.grouping) } 
                 style={{ height: 350}}>
            {
            	data.map((item, itemIndex) => {
                // console.log(item);
                // console.log(itemIndex);
                var size = ( 100 / data.length );
                var style = {
                  // opacity: (item.bits_priority_nbr/max + .25),
                  zIndex: item.bits_priority_nbr,
                  opacity: 1,
                  height: size + '%',
                  backgroundColor: "#"+(color[itemIndex][0]).toString(16)+(color[itemIndex][1]).toString(16)+(color[itemIndex][2]).toString(16)
                  // div:hover {backgroundColor: '#ff4500'}
                  };

                return(
                  <div className={ 'Chart--item ' + (this.props.grouping) } style={{ float: 'left' }}
                        value={item.bits_priority_nbr}
                        style={style}
                        key={itemIndex}
                        id='bar'
                        >   
                         <span className='tooltiptext' style={{opacity: 1}}>
                          <strong>Name:</strong> {item.name}
                          <br/>
                          <strong>PR Num:</strong> {item.bits_priority_nbr}
                        </span>
                    </div>);})
            }
            </div>
           );
	}
}

export default Column;