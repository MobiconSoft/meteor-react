import * as React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Form } from 'react-final-form';
import { Row, Col, Button } from 'antd';
import AFInput from '../sdk/antd/antd-final-input';


export interface LoginProps {
  history: any;
}

export interface LoginState {
  error: string;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onLogin = ({ email, password }) => {
    if (!email || !password) {
      this.setState({ error: 'Please input email and password both' });
      return;
    }
    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  makeForm = ({ handleSubmit, submitting, pristine }) => {
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <Col span={4}><AFInput name="email" type="email" placeholder="Email" /></Col>
          <Col span={4}><AFInput name="password" type="password" placeholder="Passowrd" /></Col>
          <Col span={2}><Button type="primary" htmlType="submit" disabled={submitting || pristine}>Login</Button></Col>
        </form>
      </React.Fragment>
    );
  };

  public render() {
    return (
      <div>
        <h1>Login to short Link</h1>
        {this.state.error ? <p>{this.state.error} </p> : undefined}
        <Row gutter={5}>
          <Form onSubmit={this.onLogin} render={this.makeForm} />
        </Row>
        <Row gutter={5} align="bottom">
          <Link to="/signup">Have a account?</Link>
        </Row>
      </div>
    );
  }
}
