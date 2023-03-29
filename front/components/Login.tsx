import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Here you can implement your login logic using email and password state variables
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )

};
export default Login;
