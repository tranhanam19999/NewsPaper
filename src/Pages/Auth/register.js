import React from 'react'

const register = props => {
    return(
        <div style={{maxWidth: 400, margin: "100px auto"}}>
        <div class="login">
            <div class="login-triangle"></div>
            
            <h2 class="login-header">Register</h2>

            <form class="login-container">
                <p><input type="email" placeholder="Email"/></p>
                <p><input type="password" placeholder="Password"/></p>
                <p><input type="password" placeholder="Confirm Password"/></p>
                <p><input type="submit" value="Register"/></p>
            </form>
        </div>
        </div>
    );
}

export default register