import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
      color: 'blue',
    },
  },
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
