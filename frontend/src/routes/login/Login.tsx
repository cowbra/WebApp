import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username) {
      alert("Veuillez entrer un nom d'utilisateur !");
      return;
    }
    if (!password) {
        alert("Veuillez entrer un mot de passe !");
        return;
      }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        className="username-input input-box"
        type="text"
        placeholder="utilisateur"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="password-input input-box"
        type="password"
        placeholder="mot de passe"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="submit-button" type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
