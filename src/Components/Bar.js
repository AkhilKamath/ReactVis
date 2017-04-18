import React, { Component } from 'react';
import '../Css/Chart.css';
class Bar extends Component {


  render() {

    let data = this.props.data;
    let max = this.props.max;
    let stacked = this.props.stacked;

    return (
            <div className={ 'Chart--serie ' + (this.props.grouping) } 
                 style={{ height: 350}}>
            {data.map((item, itemIndex) => {
                // console.log(item);
                // console.log(itemIndex);
                var size = (item.bits_priority_nbr / max) * 100;
                var style = {
                  // opacity: (item.bits_priority_nbr/max + .25),
                  zIndex: item.bits_priority_nbr,
                  opacity: 1,
                  height: size + '%',
                  backgroundColor: 'red'
                  // div:hover {backgroundColor: '#ff4500'}
                  };

                return(
                  <div className={ 'Chart--item ' + (this.props.grouping) }
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
                    </div>
                      );
            })}
          </div>
     );
  }
}

export default Bar;