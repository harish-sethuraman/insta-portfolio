import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Home from './pages/home';

const Index = () => <Home />;

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
