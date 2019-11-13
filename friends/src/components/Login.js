import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

    const handleChange = e => {
        setCredentials(...credentials, ([e.target.name]: e.target.value))
    };

    return(
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login