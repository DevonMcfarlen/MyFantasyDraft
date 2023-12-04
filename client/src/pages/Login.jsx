import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            {/* Login Card */}
            <div className="card login-card">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>

            {/* Signup Card */}
            <div className="card signup-card">
                <h2>Sign Up</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
