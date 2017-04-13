import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';
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
    console.log(data);
  }

  render() {
    return (
      <section>
        <Chart
            data={this.state.data}
        />
      </section>
    );
  }
}

export default App;