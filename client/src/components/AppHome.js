import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';


const AppHome =(props) => {
    
    const logout = () => {
        localStorage.removeItem('token');
        props.history.push('/')
    }
    
    return (
        <>
    <h1>Welcome to the home page!</h1>
    <button onClick={ logout }>Logout</button>
  
    </>
    )
}

export default AppHome;