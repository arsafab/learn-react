import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';
import { App } from 'app';

// default fixtures for TodoStore
const defaultStore = [];

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, defaultStore);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
