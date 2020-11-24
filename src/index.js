//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";


// CSS
import './index.scss';

//comp
import App from './App';
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root'),
  
);
