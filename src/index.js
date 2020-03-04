import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';

import './index.css';
import store from './Js/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
