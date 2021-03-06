import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataTable }  from './DataTable';
import { DataColumn } from './DataColumn';

// define the columns of the table
const COLUMNS = [
    { field: 'FMID__c', label: 'Market ID', editable: false },
    { field: 'Name', label: 'Market Name', editable: true },
    { field: 'City__c', label: 'City', editable: true },
]

// root of the react app
class App extends React.Component {
    render() {
        return (
            <DataTable data={this.props.data} onChange={this.props.onChange}>
            {COLUMNS.map(column => {
                return <DataColumn field={column.field} label={column.label} editable={column.editable}/>
            })}
            </DataTable>
        );
    }
}

// listener for change event
function handleChange(id, field, value) {
    console.info('Received change event', {id, field, value});
    // NOTE - here we'd use Remote Objects to perform the save
}

// global function to render the react app
function render(data) {
    ReactDOM.render(<App data={data} onChange={handleChange} />, document.getElementById('root'));
}

// initial render (without data)
render([]);

// load data: if remote objects are available, use them
if (typeof SObjectModel !== 'undefined') { // eslint-disable-line no-undef
    const market = new SObjectModel.Market(); // eslint-disable-line no-undef
        market.retrieve({ limit: 50 }, (err, records) => {
            if (err) {
                alert(err.message);
            } else {
                // convert from Remote Objects to JS objects
                const rows = records.map(record => {
                    const row = COLUMNS.reduce((row, column) => {
                        row[column.field] = record.get(column.field);
                        return row;
                    }, {});
                    row.id = record.get('FMID__c');
                    return row;
                });

                // update the react app with the data
                render(rows);
            }
        });
} else {
    // localhost development
    fetch('/Market__cs0.json')
        .then(response => response.json())
        .then(
            (json) => {
                const data = json.records.map(record => Object.assign(record, { id: record.FMID__c }));
                render(data);
            },
            (error) => {
                alert('Error loading sample data: ' + JSON.stringify(error));
            });
}
