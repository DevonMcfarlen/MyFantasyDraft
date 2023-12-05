import React from 'react';
import '../../style/Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='loginSignUpForm'>
            <form className='loginForm'>
                <h2 className='loginHeader'>Login</h2>
                <div className="mb-3">
                    <label htmlFor="inputEmailUsername" className="form-label">Email/Username</label>
                    <input type="emailUsername" className="form-control" id='inputEmailUsername' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id='inputPassword'/>
                </div>
                <Link to='/profile' type="submit" className="btn btn-primary">Login</Link>
            </form>
            <form className='signUpForm'>
                <h2 className='signupHeader'>Sign up</h2>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id='inputEmail' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input type="username" className="form-control" id='inputUsername' aria-describedby="usernameHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNewPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id='inputNewPassword'/>
                </div>
                <Link to='/profile' type="submit" className="btn btn-primary">Sign up</Link>
            </form>
        </div>
    );
}

export default Login;



//  <div className="login-container">
// {/* Login Card */}
// <div className="card login-card">
//     <h2>Login</h2>
//     <form>
//         <input type="Email" placeholder="Email" />
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//     </form>
// </div> 

// {/* Signup Card */}
//  <div className="card signup-card">
//     <h2>Sign Up</h2>
//     <form>
//         <input type="email" placeholder="Email" />
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Sign Up</button>
//     </form>
// </div>
// </div> 