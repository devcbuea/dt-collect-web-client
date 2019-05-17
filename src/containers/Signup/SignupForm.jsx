import React, { Component } from 'react';
import {
     FormGroup, FormControl, ControlLabel, Button,
     Row, Col, Alert
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { sign_user_up } from './../../actions/authentication.actions';
import './../Login/Login.css';

class SignupForm extends Component {
     constructor(props) {
          super(props);

          this.state = {
               first_name: '',
               last_name: '',
               email: '',
               username: '',
               password: ''
          }

          this.handleLogin = this.handleLogin.bind(this);
     }

     handleLogin() {
          this.props.handleAuthForm('login');
     }

     onChange = (event) => {
          this.setState({ [event.target.name] : event.target.value });
     }

     userSignup = () => {
          //TODO: add validation here
          const user = {
               first_name: this.state.first_name,
               last_name: this.state.last_name,
               email: this.state.email,
               username: this.state.username,
               password: this.state.password
          }

          this.props.sign_user_up(user);
     }

     render() {
          return (
               <div className="login-form-section">
                    <h2>Signup</h2>
                    {this.props.status? <Alert className="text-center" bsStyle="warning">Account created! Please check your email to continue</Alert> : null}
                    <form>
                         <FormGroup validationState="success">
                              <ControlLabel>Username</ControlLabel>
                              <FormControl onChange={this.onChange} value={this.state.username} name="username" type="text" placeholder="" />
                         </FormGroup>
                         <FormGroup validationState="success">
                              <ControlLabel>Firstname</ControlLabel>
                              <FormControl onChange={this.onChange} value={this.state.first_name} name="first_name" type="text" placeholder="" />
                         </FormGroup>
                         <FormGroup validationState="success">
                              <ControlLabel>Lastname</ControlLabel>
                              <FormControl onChange={this.onChange} value={this.state.last_name} name="last_name" type="text" placeholder="" />
                         </FormGroup>
                         <FormGroup validationState="success">
                              <ControlLabel>Email</ControlLabel>
                              <FormControl onChange={this.onChange} value={this.state.email} name="email" type="email" placeholder="" />
                         </FormGroup>
                         <FormGroup validationState="success">
                              <ControlLabel>Password</ControlLabel>
                              <FormControl onChange={this.onChange} value={this.state.password} name="password" type="password" placeholder="" />
                         </FormGroup>
                         <Button onClick={this.userSignup} className="login-devc">Signup</Button>
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
                              <Button className="login-facebook">Signup with FaceBook</Button>
                              <Button className="login-google">Signup with Google</Button>
                         </div>
                    </form>
               </div>
          );
     }
}
const mapStateToProps = (state) => ({
     status: state.authentication.signupStatus
 });
 
 const mapDispatchToProps = {
     sign_user_up
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);