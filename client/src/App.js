import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import AppHome from './components/AppHome';
import './App.css';



function App() {

  return (
    <>
    <div className="App">
      <Navigation/>
    </div>
   
     <Switch>
      <Route path='/register' component={Register}/>
      <Route exact path='/' component={Login}/>

    <PrivateRoute exact path='/home' component={AppHome}/>
    </Switch> 
    </>
  );
}

export default App;
