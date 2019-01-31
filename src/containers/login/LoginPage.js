import React from 'react';
import LoginForm from './../login/LoginForm';
import './login.css';
import { Grid, Row, Col } from 'react-bootstrap';

const LoginPage = () => (
  <div className="login-page">
    <Grid>
      <Row className="">
        <Col xs="12" md="7">
          <div className="">
            <h1>facebook developer circle buea data collection tool</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.,
               Donec hendrerit tempor tellus. Donec pretium posuere tellus.
               Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
               Cum sociis natoque penatibus et magnis dis parturient montes,
               nascetur ridiculus mus.Nulla posuere. Donec vitae dolor.
               Nullam tristique diam non turpis. Cras placerat accumsan nulla.
               Nullam rutrum. Nam vestibulum accumsan nisl.
            </p>
          </div>
        </Col>
        <Col xs="12" md="5"> {<LoginForm />}</Col>
      </Row>
      <Row className="copy-right">
        <p>Copyright (c) 2019</p>
      </Row>
    </Grid>
  </div>
);
export default LoginPage;