import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registeruser } from "../../store/user";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
const Register = props => {
    const dispatch = useDispatch();

    const user = useSelector(state => {return state.user})

    const [fullname , setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  //    axios.post('http://localhost:5000/user/create', {
      
  //        "fullName": "tdu",
  //        "local": {
  //            "username": "saf",
  //            "password":"sf"
  //        }
       
  //     })
  // .then(function (response) {
  //   console.log(response, "res");
  // })
  // .catch(function (error) {
  //   console.log(error, "error");
  // });
    if (user) {
        return (
          <>
            <Redirect to="/login" />
          </>
        );
      }   

    
    return(
        <div style={{maxWidth: 400, margin: "100px auto"}}>
        <div class="login">
            <div class="login-triangle"></div>
            
            <h2 class="login-header">Register</h2>

            <div class="login-container">
                <p><input type="text" placeholder="Full name" onChange={(e) => setName(e.target.value)}/></p>
                <p><input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/></p>
                <p><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/></p>
                <input type="submit" value="Register" onClick={() => dispatch(registeruser(fullname, username,password))} />
            </div>
        </div>
        </div>
    );
}

export default Register