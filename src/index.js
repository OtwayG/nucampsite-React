import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//impote = as serviceWorker from './serviveWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import 'font-awesome/css/font-awesome.css';

import 'bootstrap-social/bootstrap-social.css';
import App from './App';
//import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
