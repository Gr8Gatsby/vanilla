import React from 'react';
import './DataTable.css';
import { DataCell } from './DataCell';

export class DataTable extends React.Component {
    render() {
        const columns = this.props.children.map(column => {
            const field = column.props.field;
            const label = column.props.label;
            const editable = column.props.editable;
            return { field, label, editable };
        });

        return (
            <div className="dataTable">
                {this.props.children}
                <div className="table">
                    {(this.props.data || []).map(row => {
                        const cells = columns.map(column => {
                            return <DataCell key={row.id} id={row.id} field={column.field} value={row[column.field]} editable={column.editable} onChange={this.props.onChange} />;
                        });
                        return <div>{cells}</div>
                    })}
                </div>
            </div>
        );
    }
}
