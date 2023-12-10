import React, { useState } from 'react';
import '../../style/Login.css';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import NavBar from '../components/NavBar';

const Login = () => {
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [signupFormState, setSignupFormState] = useState({ email: '', password: '', username: '' });
    const [login, { loginError, loginData }] = useMutation(LOGIN_USER);
    const [addUser, { signupError, signupData }] = useMutation(ADD_USER);

    const handleLoginChange = (event) => {
        const { name, value } = event.target;

        setLoginFormState({
            ...loginFormState,
            [name]: value,
        });
    };

    const handleSignupChange = (event) => {
        const { name, value } = event.target;

        setSignupFormState({
            ...signupFormState,
            [name]: value,
        });
    };

    const LoginFormSubmit = async (event) => {
        event.preventDefault();
        console.log(loginFormState)
        try {
            const { data } = await login({
                variables: { ...loginFormState },
            });
            Auth.login(data.login.token, data.login.user.username);
        } catch (e) {
            console.error(e);
        }
        setLoginFormState({
          email: '',
          password: ''
        });
    };

    const SignupFormSubmit = async (event) => {
        event.preventDefault();
        console.log('in signup')
        try {
            const { data } = await addUser({
                variables: { ...signupFormState },
            });
            Auth.login(data.addUser.token, signupFormState.username);
        } catch (e) {
            console.error(e);
        }

        setSignupFormState({
          email: '',
          password: '',
          username: '',
        });
    };

    return (
        <div className='login-background'>
            <NavBar />
            <div className='loginSignUpForm'>
                <form onSubmit={LoginFormSubmit} className='loginForm'>
                    <h2 className='loginHeader'>Login</h2>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id='inputEmail' name="email" aria-describedby="emailHelp" value={loginFormState.email} onChange={handleLoginChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id='inputPassword' name="password" value={loginFormState.password} onChange={handleLoginChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

                <form onSubmit={SignupFormSubmit} className='signUpForm'>
                    <h2 className='signupHeader'>Sign up</h2>
                    <div className="mb-3">
                        <label htmlFor="signupEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id='signupEmail' name="email" aria-describedby="emailHelp" value={signupFormState.email} onChange={handleSignupChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" id='signupUsername' name="username" aria-describedby="usernameHelp" value={signupFormState.username} onChange={handleSignupChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id='signupPassword' name="password" value={signupFormState.password} onChange={handleSignupChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        </div>
     );
}

export default Login;
