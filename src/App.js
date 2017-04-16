import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';
import ColumnsSample2 from './Components/ColumnsSample2';
var data = require('./data');
class App extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      view: ''
    }
  }

  componentWillMount(){
    this.setState({
      data: data,
      view: ''
    });
  }

  // componentDidMount(){
  //   this.setcolor();
  //   console.log(data);
  // }

  handleColumnOption(){
    this.setState({
      view: "Column"
    });
    console.log(this.state);
  }

  handleBarOption() {
    this.setState({
      view: "Bar"
    });
  }

  render() {
    return (
      <div>
        <section>
          <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 1</h4>
          <p style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>
          Priority Number {this.state.view} Chart <br/><br />
          { 
            this.state.view === 'Column' ?
            <p>Column 1: STUDENT_NAME------Column 2: STUDENT_PR_NO</p> : ''
          }
          </p>
          <button className='Button' onClick={this.handleColumnOption.bind(this)} style={{width: "150px"}}>Column View</button>
          <button className='Button' onClick={this.handleBarOption.bind(this)} style={{width: "150px"}}>Bar View</button>
            <Chart
                data={this.state.data}
                view={this.state.view}
                grouping={ (this.state.view === 'Bar') ? '' : 'stacked' }
            />
        </section>
        <hr/>
        <section>
        <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 2</h4>
        <p style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>
        Add empty columns
        </p>
        <ColumnsSample2 />
        </section>
      </div>
    );
  }
}

export default App;