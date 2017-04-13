import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';
import Columns from './Components/Columns';
var data = require('./data');
class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount(){
    this.setState({
      data: data
    });
    // console.log(data);
  }

  render() {
    return (
      <div>
        <section>
          <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 1</h4>
          <p style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>
          Priority Number Bar Chart
          </p>
          <Chart
              data={this.state.data}
          />
        </section>
        <hr/>
        <section>
        <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 2</h4>
        <p style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>
        Add empty columns
        </p>
        <Columns />
        </section>
      </div>
    );
  }
}

export default App;