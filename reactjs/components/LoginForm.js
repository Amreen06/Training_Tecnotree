import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <form class="asd" onSubmit={handleSubmit}><center>
      <label>
        Username:
        <input class="b1" type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label><br></br>
        Password:
        <input class="b2" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br /><br></br><center>
      <button  class="abc" type="submit">Log In</button>
      <button class="abcd" type="submit">Sign Up</button></center></center>
    </form>
  );
}

export default LoginForm;
