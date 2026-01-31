import React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default class ExtendedHCaptcha extends HCaptcha {
	conditionallyExecute(executeRequested) {
		if (executeRequested) {
			this.execute({ async: false });
		}
	}

	componentDidMount() {
		super.componentDidMount();
		this.conditionallyExecute(this.props.executeRequested);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		super.componentDidUpdate(prevProps, prevState, snapshot);
		console.debug('In ExtendedHCaptcha update.');
		this.conditionallyExecute(this.props.executeRequested);
	}

	render() {
		return (
			<div>
				<div>Pending execute: {`${!!this.props.executeRequested}`}</div>
				<div>State counter: {`${this.props.tick}`}</div>
				{super.render()}
			</div>
		);
	}
}
