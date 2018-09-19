import React from 'react';
import { DataCell } from './DataCell';
import './DataColumn.css';

// a functional component is sufficient
export function DataColumn(props) {
    return <DataCell field={props.field}
        value={props.label}
        editable={false} />;
}
