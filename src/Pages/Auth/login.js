import React from 'react'

const Login = props => {
    return(
        <div style={{maxWidth: 400, margin: "100px auto"}}>
        <div class="login">
            <div class="login-triangle"></div>
            
            <h2 class="login-header">Log in</h2>

            <form class="login-container">
                <p><input type="email" placeholder="Email"/></p>
                <p><input type="password" placeholder="Password"/></p>
                <p><input type="submit" value="Log in"/></p>
            </form>
        </div>
        </div>
    );
}

export default Login