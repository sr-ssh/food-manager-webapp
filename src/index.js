import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './helpers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/formStyle.css';
import './assets/styles/baseStyle.css';
import './assets/styles/orderStyle.css';
import './assets/styles/productListStyle.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


