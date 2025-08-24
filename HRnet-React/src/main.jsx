import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

/**
 * Entry point for the React application
 * Renders the App component to the DOM.
 */
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);