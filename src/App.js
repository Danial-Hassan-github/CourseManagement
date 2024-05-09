
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import Content from './components/content';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';
import React from 'react';
import axios from 'axios'
import base_url from './components/Api_url';

function App() {
  return (
      <div className='container col-md-12'>
      <Header/>
      <div className='container-fluid row'>
      <Menu/>
      </div>
    </div>
  );
}
export default App;
