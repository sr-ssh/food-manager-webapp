import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './helpers';
import { Provider } from 'react-redux';

import './assets/styles/formStyle.css';
import './assets/styles/baseStyle.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


