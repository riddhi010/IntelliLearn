import React, {use, useState} from 'react';
import {loginUser} from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        setError(""); // clear previous errors

        try{
            const response = await loginUser({email,password});
            //(key-authotoken, value-its value)
            localStorage.setItem("authToken",response.data.token) //store token in localstorage
            alert("login successfull");
            navigate("/dashboard");

        } catch(err){
            setError(err.response?.data?.message || "Login failed");
        }
    };
    return (
        <div className='login-container'>
            <h2>Login</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );

};

export default Login;

