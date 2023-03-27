import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import reducers from "./reducers/index.js";
import { applyMiddleware, compose } from "redux";

const store = configureStore({ reducer: reducers }, compose(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

window.store = store;
