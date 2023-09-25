import React, { useState } from "react";
import "./Register.css";
import Navbar from "../NavBar/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newobj = {
      firstName,
      lastName,
      email,
      password,
    };
    await axios
      .post("http://localhost:8000/api/register", newobj)
        .then((res) => {
          nav("/")
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div id="login-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" onChange={(e)=>setFirstName(e.target.value)} />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" onChange={(e)=>setLastName(e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
    
  );
};

export default Login;