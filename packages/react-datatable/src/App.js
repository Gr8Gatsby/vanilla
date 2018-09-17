import React from 'react';
import './App.css';

export class DataTable extends React.Component {
    render() {
        const columns = this.props.children.map(column => {
            const field = column.props.field;
            const label = column.props.label;
            const editable = column.props.editable;
            return { field, label, editable };
        });

        return (
            <div className="table">
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

// a functional component is sufficient
export function DataColumn(props) {
    return <DataCell field={props.field}
        value={props.label}
        editable={false} />;
}

class DataCell extends React.Component {
    constructor(props, context) {
        super(props, context)
        // initial component state
        this.state = { value: this.props.value || '', className: 'view', readOnly: true }
        // create bound functions for event handlers
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    render() {
        return (
            <input className={this.state.className}
                value={this.state.value}
                readOnly={this.state.readOnly}
                onDoubleClick={this.handleDoubleClick}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            >
            </input>
        )
    }

    setEditMode(enabled) {
        this.setState({ readOnly: !enabled, className: enabled ? 'edit' : 'view' });
    }

    handleDoubleClick() {
        if (this.props.editable) {
            this.setEditMode(true);
        }
    }

    handleChange(evt) {
        this.setState({ value: evt.target.value.trim() });
    }

    handleKeyDown(evt) {
        if (evt.key === 'Enter' && !this.state.readOnly) {
            this.setEditMode(false);
            this.dispatchSave(this.state.value);
        }
    }

    handleBlur() {
        if (!this.state.readOnly) {
            this.setEditMode(false);
            this.dispatchSave(this.state.value);
        }
    }
    dispatchSave(value) {
        if (this.props.onChange) {
            this.props.onChange(this.props.id, this.props.field, value);
        }
    }
}
