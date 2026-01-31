import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';

function ConditionalForm({ siteKey }) {
	if (siteKey) {
		return <Form siteKey={siteKey} />;
	} else {
		return null;
	}
}

function HCaptchaTest() {
	const [siteKey, setSiteKey] = useState(null);

	return (
		<div>
			<h2>Synchronous delayed load test</h2>

			<Button
				onClick={() =>
					setSiteKey('10000000-ffff-ffff-ffff-000000000001')
				}
				text={'Load site key'}
			/>

			<ConditionalForm siteKey={siteKey} />
		</div>
	);
}

export default HCaptchaTest;
