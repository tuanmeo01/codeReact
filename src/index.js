import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './styles/global.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer.js';

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
const reduxStore=createStore(rootReducer)
rootNode.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
