import React, { useRef, useState } from 'react';
import ExtendedHCaptcha from './ExtendedHCaptcha';

function FormError({ error }) {
	if (error) {
		return (
			<p>
				<em>Error:</em> {error}
			</p>
		);
	} else {
		return null;
	}
}

function FormToken({ token }) {
	if (token) {
		return <div>Received token: {token}</div>;
	} else {
		return null;
	}
}

export default function Form({ siteKey }) {
	const handleVerificationSuccess = (token, ekey) => {
		console.log(`Verification handler. token: ${token} ekey: ${ekey}`);
		setToken(token);
	};

	const [error, setError] = useState(null);
	const [executeRequested, setExecuteRequested] = useState(null);
	const [tick, setTick] = useState(0);
	const [token, setToken] = useState(null);

	const onLoad = () => {
		console.debug('HCaptcha loaded');
	};

	const run = () => {
		setExecuteRequested(true);
		setTick(tick + 1);
	};

	return (
		<form>
			<p>
				Invisible HCaptcha has been rendered. Click 'Submit' to trigger
				HCaptcha.
			</p>
			<button onClick={run} type={'button'}>
				Submit
			</button>
			<ExtendedHCaptcha
				sitekey={siteKey}
				size={'invisible'}
				onLoad={onLoad}
				onVerify={(token, ekey) =>
					handleVerificationSuccess(token, ekey)
				}
				executeRequested={executeRequested}
				tick={tick}
			/>

			<FormToken token={token} />

			<FormError error={error} />
		</form>
	);
}
