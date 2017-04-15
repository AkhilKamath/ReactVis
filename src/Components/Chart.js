import React, { Component } from 'react';
import '../Chart.css';
// var view;
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
    // view = this.refs.view.value;
    this.setState({
      data: data
    });
  }

  render() {
    let brancheName = ['Select branch','Chemical Engg','Electrical Engg','Mechanical Engg','Computer Science Engg','Instrumentation Engg','MSc Biology','Msc Physics','Msc Math','Msc Chemistry','Msc Economics'];   
    let branches = ['','A1','A3','A4','A7','A8','B1','B2','B3','B4','B5'];
    let branchOption = branches.map((branch, index)=> {
      return (<option key={branch} value={branch}>{brancheName[index]}</option>);
    });
    
    let data = this.state.data;
    let stacked = this.props.grouping === 'stacked' ? true : false;
    console.log(stacked);
    let max =0;
    let sum = 0;
    for(let i = 0; i<data.length; i++){
      if(data[i].bits_priority_nbr > max)
        max = data[i].bits_priority_nbr;
        sum = sum + data[i].bits_priority_nbr;
    }
    // console.log(max);

    // let views = ['', 'ColumnView'];
    // let viewsName = ['Bar Chart', 'Column View'];
    // let viewOption = views.map((view, index) => {
      // return (<option key={view} value={view}>{viewsName[index]}</option>);
    // });

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
            <div className={ 'Chart--serie ' + (this.props.grouping) } 
                 style={{ height: 350}}>
            {data.map((item, itemIndex) => {
                // console.log(item);
                // console.log(itemIndex);
                var size = item.bits_priority_nbr / (stacked ? sum : max) * 100;
                var style = {
                  // opacity: (item.bits_priority_nbr/max + .25),
                  zIndex: item.bits_priority_nbr,
                  opacity: stacked ? (1 - (item.bits_priority_nbr/max)) + .10 : 1,
                  height: size + '%'
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
          }
        </div>
      </div>
      );
  }
}

export default Chart;