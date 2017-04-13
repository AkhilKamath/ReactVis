import React, { Component } from 'react';
import '../Css/Chart.css';

class Chart extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  selectBranch(){
    let data = this.props.data;
    let branch = this.refs.branch.value;
    data = data.filter(d => {
      return d.campus_id === branch;
    });
    this.setState({
      data: data
    });
  }

  render() {
    
    let branches = ['Select branch','A1','A3','A4','A7','A8','B1','B2','B3','B4','B5'];
    let branchOption = branches.map(branch => {
      return (<option key={branch} value={branch}>{branch}</option>);
    });
    
    let data = this.state.data;
    let max =0;
    for(let i = 0; i<data.length; i++){
      if(data[i].bits_priority_nbr > max)
        max = data[i].bits_priority_nbr;
    }
    // console.log(max);

    return(
      <div>
        <span>
        <select className='SelectBranch' ref='branch'>
        {branchOption}
        </select>
        <button className='Button' onClick={this.selectBranch.bind(this)}>OK</button>
        </span>
        <div className='Chart'>
          <span>
          <strong style={{fontFamily: 'sans-serif'}}>Total Students:</strong> {this.state.data.length}
          </span>
          {
            <div className='Chart--serie ' style={{ height: 350}}>
            {data.map((item, itemIndex) => {
                // console.log(item);
                // console.log(itemIndex);
                var size = item.bits_priority_nbr/max * 100;
                var style;
                style = {
                  // opacity: (item.bits_priority_nbr/max + .25),
                  zIndex: item.bits_priority_nbr,
                  height: (size + '%'),
                  // div:hover {backgroundColor: '#ff4500'}
                  
                };
                return(
                  <div className='Chart--item ' value={item.bits_priority_nbr}
                        style={style}
                        key={itemIndex}
                        id='bar'
                        >   
                         <span className='tooltiptext'>
                          <strong>Name:</strong> {item.name}
                          <br/>
                          <strong>PR Num:</strong> {item.bits_priority_nbr}
                        </span>
                    </div>
                      );
            })}
          </div>
          }
        </div>
      </div>
      );
  }
}

export default Chart;