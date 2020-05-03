import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

// import history from './utils/history';
import configureStore from './configureStore';

import GlobalStyles from './styles/globals';
import Routes from './routes';

import { loadState, saveState } from './reducers/localStorage';


const initialState = loadState();
const store = configureStore(initialState);

store.subscribe(() => {
  saveState({
    stages: store.getState().stages
  });
});

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <Routes />
    </Provider>,
    MOUNT_NODE,
  );
};
if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./components/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
