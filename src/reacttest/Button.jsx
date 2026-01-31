import React from 'react';

export default function Button({ onClick, text }) {
	const defaultHandler = () => {
		console.log('Clicked.  No handler configured.');
	};
	return (
		<button onClick={onClick || defaultHandler}>{text || 'Submit'}</button>
	);
}
