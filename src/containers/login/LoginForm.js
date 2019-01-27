import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

const LoginForm = () => (                              
     <div>
          <form>
               <h2>Login</h2>
               <FormGroup controlId="formValidationSuccess1" validationState="success">
                    <ControlLabel>Username or Email</ControlLabel>
                    <FormControl type="text" 
                         placeholder=""/>
               </FormGroup>
               <FormGroup controlId="formValidationSuccess1" validationState="success">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" 
                         placeholder=""/>
                    
               </FormGroup>
               <Button className="login-devc">Login</Button>
               <div className="pass-reset">
                    <div className="new-account-link">
                         <p>New here? <a href="#"> Create an account</a></p> 
                    </div>
                    <div className="forgot-pass">
                         <a href="#"> Forgot Password</a>
                    </div>
               </div>
               <p>-OR-</p>
               <div className="social-login">
                    <Button className="login-facebook">Login with FaceBook</Button>
                    <Button className="login-google">Login with Google</Button>
               </div>
               
          </form>
     </div>
);

export default LoginForm;