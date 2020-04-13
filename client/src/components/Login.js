import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';


const Login = (props) => {
    console.log("login props", props);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''    
    });

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('auth/login', credentials)
            .then(res=> {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/home');
            })
            .catch(err => {
                console.log("Error on login", err)
                throw err;
            })
    }


    return(
    <div>
        <h1>Please login</h1>
        <form onSubmit={login}>
            <label>Username
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChanges}/>
            </label>
            <label>Password
                <input
                    type='text'
                    name='password'
                    value={credentials.password}
                    onChange={handleChanges}/>
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}

export default Login;