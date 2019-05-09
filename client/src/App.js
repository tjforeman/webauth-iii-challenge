import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
    <Route path='/' component={Header} />
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/users' component={Users}/>
    </div>
  );
}

export default App;
