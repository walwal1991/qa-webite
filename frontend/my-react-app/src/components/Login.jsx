import React from 'react';
import './Css/Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // used for redirection
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://qa-webite-1.onrender.com/api/login`, {
        email,
        password,
      });

      const data = res.data; // Axios automatically parses JSON

      if (res.status === 200) {
        localStorage.setItem("token", data.token);
        console.log("Login successful!");
        // navigate("/Dashboard");
        navigate('/dashboard');
      } else {
        alert("Invalid credentials, please try again.");
        
        
      }
    } catch (err) {
      
      console.error(err);
      alert(err.response?.data?.message || "Server error, please try again.");
    }
  };
  return (
  <nav>
  <div className="container">
    
    <div className="header">
      <h1>ZT Systems</h1>
    </div>

  <form onSubmit={handleLogin}>  
    <div className="login-box">
      {/* use button click to redirect to the dashboard <form onSubmit={handleLogin}> */}
      
        <label htmlFor="username">Username</label>
        <input type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>

        <label htmlFor="password">Password</label>
        <input type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>

        <label htmlFor="company">Select Company</label>
        <select id="company" name="company">
          <option value="">--Choose Company--</option>
          <option value="zt1">United state</option>
          <option value="zt2">Neitherland</option>
          <option value="zt3">China</option>
        </select>

        <button type="submit" >Login</button>
      
    </div>
    </form>
  </div>
  </nav>);}
  export default Login;

