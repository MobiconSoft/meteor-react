import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'
import { Form } from 'react-final-form';
import { Row, Col, Button } from 'antd';
import AInput from '../../client/sdk/antd/antd-final-input';

export interface SignupProps {
}

export interface LoginState {
  error: string;
}

export default class Signup extends React.Component<SignupProps, LoginState> {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onCreateAccount = ({email, password}) => {
    if (!email || !password) {
      this.setState({ error: 'Please input email and password both' });
      return;
    }
    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  makeForm = ({handleSubmit, submitting, pristine}) => {
    return (
      <form onSubmit={handleSubmit}>
        <Col span={4}><AInput name="email" component="input" type="email" placeholder="Email"  /></Col>
        <Col span={4}><AInput name="password" component="input" type="password" placeholder="Passowrd"  /></Col>
        <Col span={2}><Button type="primary"htmlType="submit" disabled={submitting || pristine}>Create Account</Button></Col>
      </form>
    );
  }

  public render() {
    return (
      <div>
        <h1>Signup to short Link</h1>
        {this.state.error ? <p>{this.state.error} </p> : undefined}
        <Row gutter={5}>
          <Form onSubmit={this.onCreateAccount} render={this.makeForm}/>
        </Row>
        <Row gutter={5}>
          <Link to="/">Already have a account?</Link>
        </Row>
      </div>
    );
  }
}