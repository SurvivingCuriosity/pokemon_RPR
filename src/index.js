import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/style.css';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/ReduxStore";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
