import { useState } from "react";

import "./Login.scss";
import { API_SERVER } from "../globals";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const authenticate = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = { username, password };

    const result = await fetch(API_SERVER + "/api/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (result.status === 200) {
      const data = await result.json();
      sessionStorage.setItem("token", data.token);
      navigate("/dinos");
    } else {
      sessionStorage.removeItem("token");
      setErrorMessage("Invalid username or password");
    }
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
        <div className="error-message">{errorMessage}</div>
      </form>
    </div>
  );
}

export default Login;
