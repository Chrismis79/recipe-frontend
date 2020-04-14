import React from 'react';
import {Route} from 'react-router-dom';
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
    
       
        <Route path='/register' component={Register}/>
        <Route exact path='/' component={Login}/>
        
        <PrivateRoute>           
            <Route path='/home' component={AppHome}/>
        </PrivateRoute>
      
        
    
    </>
  );
}

export default App;
