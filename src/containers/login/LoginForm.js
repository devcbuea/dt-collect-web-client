import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => (
     <div className="login-form-section">
          <h2>Login</h2>
          <form>
               <FormGroup controlId="email-group" validationState="success">
                    <ControlLabel>Username or Email</ControlLabel>
                    <FormControl type="text" placeholder="" />
               </FormGroup>
               <FormGroup controlId="email-group" validationState="success">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" placeholder="" />
               </FormGroup>
               <Button className="login-devc">Login</Button>
               <div className="pass-reset">
                    <div className="new-account-link">
                         <p>New here? <Link to="/"> Create an account</Link>  |</p>
                    </div>
                    <div className="forgot-pass">
                         <Link to="/"> Forgot Password</Link>
                    </div>
               </div>
               <p className="alt-login">-OR-</p>
               <div className="social-login">
                    <Button className="login-facebook">Login with FaceBook</Button>
                    <Button className="login-google">Login with Google</Button>
               </div>
          </form>
     </div>
);
export default LoginForm;