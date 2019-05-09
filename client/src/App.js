import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import UsersList from './components/UsersList'

function App() {
  return (
    <div className="App">
    <Route path='/' component={Header} />
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/users' component={UsersList}/>
    </div>
  );
}

export default App;
