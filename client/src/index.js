//npm install axios = api requests
//moment library to work with time and date
//react-file-base64 convert images
//redux-thunk asynchronous actions with redux
//npm install react-redux

//this file connect react app to index.html file
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Provider keep track of that store, global state which allows us to access
//that store from anywhere in the app.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


import thunk from 'redux-thunk';
//reducers from reducers folder
import { reducers } from './reducers';

import './index.css';

//takes in the reducers 
const store = createStore(reducers, compose(applyMiddleware(thunk)));

//ReactDOM.render(<App />, document.getElementByID('root'));
//                                 getElement connect dev with an id of root

//Provider specifcy store to store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);