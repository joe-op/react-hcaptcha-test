import React from 'react';
import { ReactDom, createRoot } from 'react-dom/client';
import Form from './Form';

window.addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.getElementById('react-test'));
    root.render(Form());
});
