import React from 'react';
import LoginForm from './../login/LoginForm';
import './login.css';

const LoginPage = () => (
    <div className="login-page">
        <div className="content-form">
            <div className="login-content">
                <h1>facebook developer circle buea</h1>
                <h1>data collection tool</h1>

                <p>
                    Cool Text is a FREE graphics generator for web pages and anywhere else you 
                    need an impressive logo without a lot of design work. Simply choose what 
                    kind of image you would like.Then fill out a form and you'll have your own 
                    custom image created on the fly, Then fill out a form and you'll have your 
                    own custom image created on the fly
                </p>
            </div>
            <div className="login-form">
                <LoginForm />
            </div>
        </div>
        <div className="copy-right">
            <p>Copyright (c) 2019</p>
        </div>
    </div>
);

export default LoginPage;