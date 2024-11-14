import React from 'react';
import '../css/styleLogin.css'; // Adjust the path as needed

function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="/login" method="POST">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
