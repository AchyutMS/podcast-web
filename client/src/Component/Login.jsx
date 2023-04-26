import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      setError("Please enter name and password");
      return;
    }
    axios
      .post("http://localhost:8800/api/auth/signin", { name, password })
      .then((res) => {
        console.log(res);
        // const { access_token } = res.token;
        localStorage.setItem("access_token", res.data.token);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setError(error.response.data.message);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link>.</p>
    </div>
  );
};

export default Login;
