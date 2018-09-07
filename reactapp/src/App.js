import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <DataTable pageSize="10" objectName="Market">
        
      </DataTable>
    );
  }
}

class DataTable extends React.Component{
  render() {
    var rows = [[{cell:'c1'}, {cell:'c2'}],[{cell:'c1'}, {cell:'c2'}], [{cell:'c1'}, {cell:'c2'}]]
      return(
          <div>
              <h1>Data Table</h1>
              <div>{this.props.pageSize}</div>
              <div>{this.props.objectName}</div>
              {rows.map(function(cells, index){
                return <DataRow key={ index } cells={ cells.cell }></DataRow>
              })}
          </div>
      )
  }
}

class DataRow extends React.Component{
  render(){
    return(
      <div>
        <h3>Data Row</h3>
        {this.props.cells.map(function(cell, index){
          return <DataCell key={ index } cell={ cell }></DataCell>
        })

        }
      </div>
    )
  }
}

class DataCell extends React.Component{
  render(){
    return(
      <span>
        <strong>{ this.props.cell }</strong>
      </span>
    )
  }
}

export default App;
