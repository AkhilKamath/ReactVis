import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';
import ColumnsSample2 from './Components/ColumnsSample2';
import Time from './Components/Time';
var data = require('./data');
class App extends Component {

  constructor(){
    super();
    this.state = {
      data: data,
      view: ''
    }
  }

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

  handleHistogramOption() {
    this.setState({
      view: "Histogram"
    });
  }

  render() {
    return (
      <div>
        <section>
        <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 1</h4>
        <Time />
        </section>

        <section>
          <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 2</h4>
          <p style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>
          Priority Number {this.state.view} Chart <br/><br />
          { 
            this.state.view === 'Column' ?
            <p><strong>Column 1:</strong> STUDENT_NAME------<strong>Column 2:</strong> STUDENT_PR_NO</p> : ''
          }
          </p>
          <button className='Button' onClick={this.handleColumnOption.bind(this)} style={{width: "150px"}}>Column View</button>
          <button className='Button' onClick={this.handleBarOption.bind(this)} style={{width: "150px"}}>Bar View</button>
          <button className='Button' onClick={this.handleHistogramOption.bind(this)} style={{width: "200px"}}>Histogram View</button>
          <Chart
              data={this.state.data}
              view={this.state.view}
              grouping={ (this.state.view === 'Bar') ? '' : 'stacked' }
          />

            
        </section>
        
        <hr/>
        
        <section>
        <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 3</h4>
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