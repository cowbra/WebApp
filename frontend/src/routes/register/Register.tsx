import React, { useState } from "react";
import "./Register.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Tous les champs sont obligatoires");
      return;
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input
        className="username-input"
        type="text"
        placeholder="nom d'utilisateur"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="password-input"
        type="password"
        placeholder="mot de passe"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="submit-button" type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
