import { useState } from "react";

import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <form>
        <h2>Sign in</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>

        <div className="glow">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
