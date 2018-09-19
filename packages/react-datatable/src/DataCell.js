import React from 'react';
import './DataCell.css'

export class DataCell extends React.Component {
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
        if (!this.state.readOnly) {
            const value = evt.target.value.trim();
            this.setState({ value });
        }
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
        if (this.props.onChange && this.props.value !== this.state.value) {
            this.props.onChange(this.props.id, this.props.field, value);
        }
    }
}
