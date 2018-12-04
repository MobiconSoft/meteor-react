import * as React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Form } from 'react-final-form';
import { EuiButton, EuiFlexItem } from '@elastic/eui';
import EInput from '../../client/sdk/eui/eui-final-input';
import { JFlexItem, JFlexGroup } from '../../client/sdk/eui/flexgroup.style';
import { JPage, JRow } from '../../client/layouts/common.style';

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
      <form onSubmit={handleSubmit}>
        <JFlexGroup width="600px" direction="row" gutterSize="s">
          <JFlexItem><EInput name="email" type="email" placeholder="Email" /></JFlexItem>
          <JFlexItem><EInput name="password" type="password" placeholder="Passowrd" /></JFlexItem>
          <JFlexItem width="100px"><EuiButton type="submit" disabled={submitting || pristine}>Login</EuiButton></JFlexItem>
        </JFlexGroup>
      </form>
    );
  };

  public render() {
    return (
      <JPage>
        <JRow padding="10px" fontSize="20px">Login to short Link</JRow>
        <JRow>{this.state.error ? <p>{this.state.error} </p> : undefined}</JRow>
        <JRow><Form onSubmit={this.onLogin} render={this.makeForm} /></JRow>
        <JRow><Link to="/signup">Have a account?</Link></JRow >
      </JPage>
    );
  }
}
