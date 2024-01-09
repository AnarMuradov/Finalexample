import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FetchProvider from './context/FetchContext';
import BasketProvider from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchProvider>
    <BasketProvider>
    <App />
    </BasketProvider>
    </FetchProvider>
  </React.StrictMode>
);


