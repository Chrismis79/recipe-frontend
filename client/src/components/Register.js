import React, {useState} from 'react';

import {axiosWithAuth} from "../utils/axiosWithAuth";

function Register(props){
    const [input, setInput] = useState({username: '', password: '', email: ''});

    const handleChanges = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    
    const onSubmit = (e) => {
    
       e.preventDefault(); 
      
        axiosWithAuth()
                .post('auth/register', {...input})
                .then(res => {
                    console.log("res on register", res)
                    localStorage.setItem('token', res.data.token);
                    
                })
                .catch(err => console.log("Registration error", err))
        setInput({username: '', password:'', email: ''})
        props.history.push('/')
    }
    

  return (
      <>
     
      <div>
          <form onSubmit={onSubmit}>
             <label htmlFor='username'>
                 Username*
            </label> 
            <input name='username'
                   value={input.username}
                   type="text"
                   placeholder="Enter username"
                   onChange={handleChanges}
                   required/>
            <label htmlFor="password">
                Password*
            </label>
            <input name='password'
                   value={input.password}
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChanges}
                    required/>
            <label htmlFor="email">
                Email*
            </label>
            <input name='email'
                   value={input.email}
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChanges}
                    required/>
            <button>Register</button>
          </form>
          
      </div>
      </>
  )
}

export default Register;