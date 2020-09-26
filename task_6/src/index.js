import React from "react";
import ReactDOM from "react-dom";
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import App from "./components/app";
import './index.scss';

const store = createStore(rootReducer, compose(
    applyMiddleware(
      thunk
    ),
  ));

const app = (
    <Provider store={store}>
      <App />
    </Provider>
  )

ReactDOM.render(app, document.getElementById("root"));
