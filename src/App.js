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
    // console.log(data);
  }

  handleViewsOption(){
    let view = this.refs.view.value;
    this.setState({
      data: data,
      view: view
    });
    // console.log(this.state);
  }

  render() {

    let viewsName = ['Select View', 'Bar', 'Column'];
    let viewsOptions = viewsName.map(item =>{
      return (<option key={item} value={item}>{item}</option>) ;
    });

    return (
      <div>
        <section>
          <h4 style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>Sample 1</h4>
          <p style={{fontFamily: 'sans-serif', marginLeft: '10px'}}>
          Priority Number {this.state.view} Chart
          </p>
          <select className='SelectView' ref='view'>{viewsOptions}</select>
          <button className='Button' onClick={this.handleViewsOption.bind(this)}>OK</button>
            <Chart
                data={this.state.data}
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