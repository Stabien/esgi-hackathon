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
        <h1 className="w-fit m-auto">Login</h1>
        <form className="w-fit m-auto flex flex-col" onSubmit={handleLogin}>
          <div className="flex gap-2 mb-3 mx-auto flex-col w-fit">
            <label className="" htmlFor="email">Email</label>
            <input className="border border-gray-700 w-40 rounded" type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="flex gap-2 flex-col mx-auto w-fit">
            <label className="" htmlFor="password">Password</label>
            <input className="border border-gray-700 w-40 rounded" type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button className="border border-yellow-200 px-32 py-5 bg-yellow-150 rounded mt-10 shadow-md" type="submit">Login</button>
          <a className="border border-yellow-200 text-blue-250 px-32 py-5 rounded mt-10 shadow-md" href="/signin">Sign Up</a>
        </form>
      </div>
    </>
  )

};
export default Login;
