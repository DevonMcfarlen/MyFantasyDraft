import React from 'react';
import '../../style/Login.css';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {LOGIN_USER} from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';
import { useState } from 'react';
import NavBar from '../components/NavBar';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '', username: '' });
    const [login, { loginError, loginData }] = useMutation(LOGIN_USER);
    const [addUser, {signupError, signupData}] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const LoginFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }

        setFormState({
          email: '',
          password: '',
        });
      };
      const SignupFormSubmit  = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    
    return (
      <div className='login-background'>
        <NavBar/>
        <div className='loginSignUpForm'>
            <form onSubmit={LoginFormSubmit} className='loginForm'>
                <h2 className='loginHeader'>Login</h2>
                <div className="mb-3">
                    <label htmlFor="inputEmailUsername" className="form-label">Email/Username</label>
                    <input type="emailUsername" className="form-control" id='inputEmailUsername' aria-describedby="emailHelp" value={formState.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id='inputPassword' value={formState.password} onChange={handleChange}/>
                </div>
                <Link to='/profile' type="submit" className="btn btn-primary login-btn">Login</Link>
            </form>
            <form onSubmit={SignupFormSubmit} className='signUpForm'>
                <h2 className='signupHeader'>Sign up</h2>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id='inputEmail' aria-describedby="emailHelp" value={formState.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input type="username" className="form-control" id='inputUsername' aria-describedby="usernameHelp" value={formState.username} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNewPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id='inputNewPassword' value={formState.password} onChange={handleChange}/>
                </div>
                <Link to='/profile' type="submit" className="btn btn-primary signup-btn">Sign up</Link>
            </form>
        </div>
        </div>
    );
  }

export default Login;