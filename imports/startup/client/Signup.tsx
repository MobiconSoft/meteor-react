import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'
import { Form } from 'react-final-form';
import { EuiButton } from '@elastic/eui';
import EInput from '../../client/sdk/eui/eui-final-input';
import { JFlexGroup, JFlexItem } from '../../client/sdk/eui/flexgroup.style';
import { JRow, JPage } from '../../client/layouts/common.style';

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
        <JFlexGroup width="600px" direction="row" gutterSize="s">
          <JFlexItem><EInput name="email" component="input" type="email" placeholder="Email" /></JFlexItem>
          <JFlexItem><EInput name="password" component="input" type="password" placeholder="Passowrd" /></JFlexItem>
          <JFlexItem width="100px"><EuiButton type="submit" disabled={submitting || pristine}>Create Account</EuiButton></JFlexItem>
        </JFlexGroup>
      </form>
    );
  }

  public render() {
    return (
      <JPage>
        <JRow fontSize="20px" padding="10px">Signup to short Link</JRow>
        <JRow>{this.state.error ? <p>{this.state.error} </p> : undefined}</JRow>
        <JRow><Form onSubmit={this.onCreateAccount} render={this.makeForm} /></JRow>
        <JRow><Link to="/">Already have a account?</Link></JRow>
      </JPage>
    );
  }
}