import React, { Component } from 'react';
import Histogram from './Histogram';
import '../Css/Chart.css';

class Chart extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      color: []
    };
  }

  selectBranch(){
    let data = this.props.data;
    let branch = this.refs.branch.value;
    data = data.filter(d => {
      return d.campus_id === branch;
    });
    let color = this.state.color;
    color = [];
    for(let i = 0; i < data.length; i++){
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      color.push([ red, green, blue ]);
    }

    this.setState({
      data: data,
      color: color
    });
  }

  render() {
    let brancheName = ['Select branch','Chemical Engg','Electrical Engg','Mechanical Engg','Computer Science Engg','Instrumentation Engg','MSc Biology','Msc Physics','Msc Math','Msc Chemistry','Msc Economics'];   
    let branches = ['','A1','A3','A4','A7','A8','B1','B2','B3','B4','B5'];
    let branchOption = branches.map((branch, index)=> {
      return (<option key={branch} value={branch}>{brancheName[index]}</option>);
    });
    
    let color = this.state.color;
    let data = this.state.data;
    let bar = this.props.view === 'Bar' ? true : false;
    let column = this.props.view === 'Column' ? true : false; 
    let histogram = this.props.view === 'Histogram' ? true : false;
    let stacked = this.props.grouping === 'stacked' ? true : false;
    let max =0;
    let sum = 0;
    for(let i = 0; i<data.length; i++){
      if(data[i].bits_priority_nbr > max)
        max = data[i].bits_priority_nbr;
        sum = sum + data[i].bits_priority_nbr;
    }

    let two_one_views = column ? [0,1] : [0];
    return(
      <div>
        <span>
        <select className='SelectBranch' ref='branch'>
        {branchOption}
        </select>
        <button className='Button' onClick={this.selectBranch.bind(this)}>OK</button>
        </span>
        <span style={ { padding: "10px" } }>
          <strong style={{fontFamily: 'sans-serif'}}>Total Students:</strong> {this.state.data.length}
          </span>
        {
         
         histogram ? <Histogram data={this.state.data}/> : 
        
          <div className='Chart'>
              {
                two_one_views.map( i => {
                  return (
                    
                    <div className={ 'Chart--serie ' + (this.props.grouping) } 
                     style={{ height: 350}}>
                {
                  data.map((item, itemIndex) => {
                    // console.log(item);
                    // console.log(itemIndex);
                    var size = ( bar ? (item.bits_priority_nbr / (stacked ? sum : max) * 100) : ( 100 / data.length ) );
                    var style = {
                      // opacity: (item.bits_priority_nbr/max + .25),
                      // zIndex: item.bits_priority_nbr,
                      opacity: (i === 1) ? (1 - (item.bits_priority_nbr/max) + .10) : 1,
                      height: size + '%',
                      backgroundColor: ( column ? ((i === 1) ? "red" : "#"+(color[itemIndex][0]).toString(16)+(color[itemIndex][1]).toString(16)+(color[itemIndex][2]).toString(16)) : 'red')
                      // div:hover {backgroundColor: '#ff4500'}
                      };


                      // if(i === 1){
                      //     style = {
                      //       opacity: (1 - (item.bits_priority_nbr/max) + .10),
                      //       backgroundColor: "red"
                      //     }
                      //   }

                    return(
                       <div className={ 'Chart--item ' + (this.props.grouping) }
                              value={item.bits_priority_nbr}
                              style={style}
                              key={itemIndex}
                              id={i}
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
                    );
                } )
              }
            
          </div>
      }
      </div>
      );
  }
}

export default Chart;