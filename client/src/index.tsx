import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.min.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
