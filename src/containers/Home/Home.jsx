import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './../../assets/styles/App.css';

import LoginForm from './../Login/LoginForm';
import SignupForm from './../Signup/SignupForm';
import Header from './../../components/Header.jsx';
import './Home.css';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authForm: 'login'
        }

        this.handleAuthForm = this.handleAuthForm.bind(this);
    }

    handleAuthForm(childState) {
        this.setState({ authForm: childState });
    }

    render() {
        return (
            <div className="home-page">
                <div className="main-page">
                    <Row>
                        <Col xs="12" md="6">
                            <div className="login-content">
                                <h1>facebook developer circle buea data collection tool</h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.,
                                   Donec hendrerit tempor tellus. Donec pretium posuere tellus.
                                   Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
                                   Cum sociis natoque penatibus et magnis dis parturient montes,
                                   nascetur ridiculus mus.Nulla posuere. Donec vitae dolor.
                                   Nullam tristique diam non turpis. Cras placerat accumsan nulla.
                                   Nullam rutrum. Nam vestibulum accumsan nisl.
                                </p>
                                <div className="copy-right">
                                    <p>Copyright (c) 2019</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="form-area" xs="12" md="6">
                            {this.state.authForm === 'signup' ? <SignupForm handleAuthForm={this.handleAuthForm} /> : null}
                            {this.state.authForm === 'login' ? <LoginForm handleAuthForm={this.handleAuthForm} /> : null}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;