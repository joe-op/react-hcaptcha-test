import React from 'react';
import { createRoot } from 'react-dom/client';
import HCaptchaTest from './HCaptchaTest';

window.addEventListener('DOMContentLoaded', () => {
	const root = createRoot(document.getElementById('react-test'));
	root.render(
		<React.StrictMode>
			<HCaptchaTest />
		</React.StrictMode>
	);
});
