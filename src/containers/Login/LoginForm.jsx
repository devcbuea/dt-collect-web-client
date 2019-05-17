import React, { Component } from 'react';
import {
     FormGroup, FormControl, ControlLabel, Button,
     Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { log_user_in } from './../../actions/authentication.actions';
import './Login.css';

class LoginForm extends Component {
     constructor(props) {
          super(props);

          this.state = {
               email: '',
               password: ''
          }
  
          this.handleSignup = this.handleSignup.bind(this);
      }
  
      handleSignup() {
          this.props.handleAuthForm('signup');
      }

      onChange = (event) => {
          this.setState({ [event.target.name] : event.target.value });
     }

     userLogin = () => {
          //TODO: add validation here
          const user = {
               email : this.state.email,
               password: this.state.password
          }

          this.props.log_user_in(user);
     }

     render() {
          return (
               <div className="login-form-section">
                    <h2>Login</h2>
                    <form>
                         <FormGroup controlId="email-group" validationState="success">
                              <ControlLabel>Email</ControlLabel>
                              <FormControl value={this.state.email} onChange={this.onChange} name="email" type="text" placeholder="" />
                         </FormGroup>
                         <FormGroup controlId="password-group" validationState="success">
                              <ControlLabel>Password</ControlLabel>
                              <FormControl value={this.state.password} onChange={this.onChange} name="password" type="password" placeholder="" />
                         </FormGroup>
                         <Button onClick={this.userLogin} className="login-devc">Login</Button>
                         <Row>
                              <Col sm={7} xs={12} className="new-account-link">
                                   <p>New here? <span className="link" onClick={this.handleSignup}> Create an account</span></p>
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
const mapStateToProps = (state) => ({
     status: state.authentication.loginToken
 });
 
 const mapDispatchToProps = {
     log_user_in
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);