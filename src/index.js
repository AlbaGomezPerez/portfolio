import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import {BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM.render(<BrowserRouter> <App/> </BrowserRouter>, document.getElementById('root'));
