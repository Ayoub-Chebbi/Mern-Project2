import React, { useState} from "react";
import "./Login.css";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newobj = {
      email,
      password,
    };
    await axios
      .post("http://localhost:8000/api/login", newobj)
        .then((res) => {
          if(res.data.accountType === "admin"){
            nav("/admin")
          }
          else {
            nav("/")
          }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div id="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
