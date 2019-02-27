import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import configureStore from "./store/store";
import * as serviceWorker from './serviceWorker';
import routes from './routes';

import './styles/common.scss';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
