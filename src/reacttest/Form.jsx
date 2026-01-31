import React, { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

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
	const [token, setToken] = useState(null);
	const captchaRef = useRef(null);

	const onLoad = () => {
		console.debug('HCaptcha loaded');
	};

	const run = () => {
		try {
			captchaRef.current.execute({ async: false });
		} catch (err) {
			setError(`Running hcaptcha failed. Error: ${err}`);
		}
	};

	return (
		<form>
			<p>
				Invisible HCaptcha has been rendered. Click 'Submit' to trigger
				hcaptcha.
			</p>
			<button onClick={run} type={'button'}>
				Submit
			</button>
			<HCaptcha
				sitekey={siteKey}
				size={'invisible'}
				onLoad={onLoad}
				onVerify={(token, ekey) =>
					handleVerificationSuccess(token, ekey)
				}
				ref={captchaRef}
			/>

			<FormToken token={token} />

			<FormError error={error} />
		</form>
	);
}
