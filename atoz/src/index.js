import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const WithRouterApp = withRouter(App);
ReactDOM.render(<Router><WithRouterApp /></Router>, document.getElementById('root'));