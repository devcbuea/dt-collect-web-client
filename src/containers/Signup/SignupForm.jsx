import React, { Component } from 'react';
import {
     FormGroup, FormControl, ControlLabel, Button,
     Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './../login/login.css';

class SignupForm extends Component {
     constructor(props) {
          super(props);

          this.handleLogin = this.handleLogin.bind(this);
     }

     handleLogin() {
          this.props.handleAuthForm('login');
     }

     render() {
          return (
               <div className="login-form-section">
                    <h2>Signup</h2>
                    <form>
                         <FormGroup controlId="email-group" validationState="success">
                              <ControlLabel>Username or Email</ControlLabel>
                              <FormControl type="text" placeholder="" />
                         </FormGroup>
                         <FormGroup controlId="email-group" validationState="success">
                              <ControlLabel>Password</ControlLabel>
                              <FormControl type="password" placeholder="" />
                         </FormGroup>
                         <Button className="login-devc">Signup</Button>
                         <Row>
                              <Col sm={7} xs={12} className="new-account-link">
                                   <p>Already have an account? <span className="link" onClick={this.handleLogin}> Login</span></p>
                              </Col>
                              <Col sm={5} xs={12} className="forgot-pass">
                                   <Link to="/"> Forgot Password</Link>
                              </Col>
                         </Row>
                         <p className="alt-login">-OR-</p>
                         <div className="social-login">
                              <Button className="login-facebook">Login with FaceBook</Button>
                              <Button className="login-google">Login with Google</Button>
                         </div>
                    </form>
               </div>
          );
     }
}
export default SignupForm;