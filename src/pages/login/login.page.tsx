import React from 'react';
import logo from '../../logo.svg';
import './login.css';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder="Enter password" />
                            </div>
                            <button type="submit" className="btn btn-primary mr-1">Login</button>
                            <button type="submit" className="btn btn-primary ml-1">Register</button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Login;
