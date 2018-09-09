import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      <DataTable pageSize="10" objectName="Market">
        <div class="column" name="FMID__c" display-name="Market ID" data-editable="false"></div>
        <div class="column" name="Name" display-name="Market Name" data-editable="true"></div>
        <div class="column" name="Id" display-name="Salesforce ID" data-editable="false"></div>
      </DataTable>
      </div>
    );
  }
}

class DataTable extends React.Component{
  render() {
    var records = [{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018261,"Name":"Caledonia Farmers Market Association - Danville","Id":"a00R00000012ZKhIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018318,"Name":"Stearns Homestead Farmers&#39; Market","Id":"a00R00000012ZKiIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1009364,"Name":"106 S. Main Street Farmers Market","Id":"a00R00000012ZKjIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1010691,"Name":"10th Steet Community Farmers Market","Id":"a00R00000012ZKkIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1002454,"Name":"112st Madison Avenue","Id":"a00R00000012ZKlIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1011100,"Name":"12 South Farmers Market","Id":"a00R00000012ZKmIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1009845,"Name":"125th Street Fresh Connect Farmers&#39; Market","Id":"a00R00000012ZKnIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1005586,"Name":"12th &amp; Brandywine Urban Farm Market","Id":"a00R00000012ZKoIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1008071,"Name":"14&amp;U Farmers&#39; Market","Id":"a00R00000012ZKpIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1012710,"Name":"14th &amp; Kennedy Street Farmers Market","Id":"a00R00000012ZKqIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1019157,"Name":"16th Ave Farmers Market","Id":"a00R00000012ZKrIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018792,"Name":"170 Farm Stand","Id":"a00R00000012ZKsIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1016782,"Name":"175th Street Greenmarket","Id":"a00R00000012ZKtIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1003877,"Name":"17th Ave Market","Id":"a00R00000012ZKuIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1016784,"Name":"17th Street Farmers Market","Id":"a00R00000012ZKvIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1010968,"Name":"18th and Christian Farmers&#39; Market","Id":"a00R00000012ZKwIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1009994,"Name":"18th Street Farmer&#39;s Market","Id":"a00R00000012ZKxIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1018365,"Name":"18th Street Farmers Market","Id":"a00R00000012ZKyIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1012790,"Name":"19/27 Community Farmers Market","Id":"a00R00000012ZKzIAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}},{"_name":"Market__c","_fields":{"City__c":{"type":"S"},"Twitter__c":{"type":"S"},"FMID__c":{"type":"N"},"Name":{"type":"S"}},"_fieldShorthands":{},"_props":{"FMID__c":1012158,"Name":"21 Acres Farm Market","Id":"a00R00000012ZL0IAM"},"_overrides":{"create":"","retrieve":"","update":"","del":""}}]
    var columnMeta = [];
      return(
          <div className="dataTable">
          
              <h1>Data Table</h1>
              {this.props.children.map(div => {
                let displayName = div.props['display-name']
                let name = div.props['name']
                let dataEditable = div.props['data-editable']

                columnMeta.push({'displayName': displayName, 'dataEditable': dataEditable, 'name': name})
                return <DataCell key={ div.props['name']} className="value" value={ div.props['display-name'] } editable="false">  </DataCell>
              })}
              {
                records.map(row => {
                  return <DataRow key={ row.Id } row={ row } columns={ columnMeta }></DataRow>
                })
              }
          </div>
      )
  }
}

class DataRow extends React.Component{
  render(){
    var entries = []
    var columns = this.props.columns
    return(
      <div>
        {Object.entries(this.props.row._props).forEach(attr => {
          let cellMeta = columns.find(cellName => cellName.name === attr[0])
          attr.meta = cellMeta
          entries.push(attr);
        })}
        
        {entries.map(cell => {
          return <DataCell label={ cell[0] } value={ cell[1] } editable={ cell.meta.dataEditable } className="value"></DataCell>
        })}
      </div>
    )
  }
}

class DataCell extends React.Component{
  constructor(props, context) {
    super(props, context)
    this.handleBlur = this.handleBlur.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }
  
  render(){
    return(
      <input  className={ this.props.className } 
              value={ this.props.value }
              editable = { this.props.editable }
              onDoubleClick={ this.handleDoubleClick }
              onBlur={ this.handleBlur }
              readOnly>
      </input>
    )
  }

  componentDidMount(){
  
  }

  saveChanges(obj, value){

    // reset the HTML input to be readOnly
    obj.setAttribute('class', 'value');
    obj.readOnly = true;

    // prepare event
    const detail = { 'label':this.label, 'value':value };
    const event = new CustomEvent('cellUpdate', { bubbles:true, detail });
    obj.dispatchEvent(event);
  }

  handleDoubleClick(evt) {
    if(this.props.editable === "true") {
        evt.target.readOnly = false;
        evt.target.setAttribute('class', 'edit');
    }
  }

  handleBlur(evt) {
    if (evt.target.readOnly === false) {
        this.saveChanges(evt.target, evt.target.value.trim());
    }
  }
}

export default App;
