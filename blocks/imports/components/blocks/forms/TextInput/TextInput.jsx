import React from 'react';

import { BaseTextInput } from '../BaseElements/BaseTextInput.jsx';

import './TextInput.scss';



export class TextInput extends React.Component {

	hasValueChanged() {
		return this.refs.input.hasValueChanged();
	}

	getValue() {
		return this.refs.input.getValue();
	}

	render() {

		let inputClassName = "input-text";
		if (this.props.errorMessage) {
			inputClassName = "input-text-error";
		} else if (this.props.successMessage) {
			inputClassName = "input-text-success";
		}

		return (
			<div className="text-input" style={this.props.style}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<span className="input-text-help">{this.props.helpText}</span>
				<BaseTextInput
					ref="input"
					className={inputClassName}
					name={this.props.name}
					value={this.props.value}
					validationCallback={this.props.validationCallback}
					doneTypingInterval={this.props.doneTypingInterval}
					placeholderText={this.props.placeholderText}
				/>
				{this.props.errorMessage ?
					<div className="message-text-error">{this.props.errorMessage}</div> :
					<div className="message-text-success">{this.props.successMessage}</div>
				}
			</div>
		);
	}
}
