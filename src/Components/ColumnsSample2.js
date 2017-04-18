import React, { Component } from 'react';
import '../Css/Column.css';
import uuid from 'uuid';
import update from 'immutability-helper';
import deepFreeze from 'deep-freeze';

var count = 0;
class ColumnsSample2 extends Component {

  constructor(){
    super();
    this.state = {
      id: [uuid.v4()]
    }
  }
  
  handleAddColumn(){
    //to test for immutable state
    // deepFreeze(this.state);

    this.setState({
      id: [...this.state.id, uuid.v4()]
    });

    // const newIds = update(this.state.id, { $push: [uuid.v4()]});
    // this.setState({
    //   id: newIds
    // });
  }

  handleDeleteColumn(delId, event){
    
    //to test for immutable state
    // deepFreeze(this.state);

    let index = this.state.id.findIndex(x => x === delId);
    this.setState({
      id: [...this.state.id.slice(0, index), ...this.state.id.slice(index+1)]
    });

    // const newIds = update(this.state.id, { $splice: [[index, 1]]});
    // this.setState({
    //   id: newIds
    // });

    event.preventDefault();
  }

  render() {
    count = 0;
    let columnId = this.state.id;
    let columnItem = columnId.map(id => {
      count = count + 1;
      return (
        <div key={id} className='Column'>
        <a href='#' onClick={this.handleDeleteColumn.bind(this, id)}>Delete</a>
        <h4 style={{textAlign: 'center'}}>{id.slice(0, 4)}</h4>
        <div id={id}>
        </div>
        </div>);
    });
    return (
      <div>
      {columnItem}
      <button onClick={this.handleAddColumn.bind(this)}>Add column</button>
      </div>
    );
  }
}

export default ColumnsSample2;