import { useState } from "react";

import "./Login.scss";
import { API_SERVER } from "../globals";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = { username, password };

    const result = await fetch(API_SERVER + "/api/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await result.json();
    const token = data.token;

    console.log(token);
  };

  return (
    <div className="Login">
      <form onSubmit={authenticate}>
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
