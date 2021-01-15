import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../../store/user";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
const Login = (props) => {
  const dispatch = useDispatch();

  const user = useSelector(state =>  state.user)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(loginuser(username,password))
 
  }


  if (user) {
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }
  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <div class="login">
        <div class="login-triangle"></div>
        <h2 class="login-header">Log in</h2>
        <div class="login-container">
          <p>
            <input
              type="text"
              placeholder="Email"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <input type="submit" value="Log in" onClick={() => login()} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
