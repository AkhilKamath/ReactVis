import React, { Component } from 'react';
import '../Css/Column.css';
import uuid from 'uuid';
var count = 0;
class ColumnsSample2 extends Component {

  constructor(){
    super();
    this.state = {
        id: []
    }
  }

  componentWillMount(){
    this.setState({
      id: [uuid.v4()]
    })
  }

  handleAddColumn(){
    let id = this.state.id;
    id.push(uuid.v4());
    this.setState({
      id: id
    });
  }

  handleDeleteColumn(delId){
    let id = this.state.id;
    let index = id.findIndex(x => x === delId);
    id.splice(index,1);
    this.setState({
      id: id
    });
  }

  render() {
    count = 0;
    let columnId = this.state.id;
    let columnItem = columnId.map(id => {
      count = count + 1;
      return (
        <div key={id} className='Column'>
        <a href='#' onClick={this.handleDeleteColumn.bind(this, id.id)}>Delete</a>
        <h4 style={{textAlign: 'center'}}>{count}</h4>
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