import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'
import { Form, Field } from 'react-final-form';

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
        <Field name="email" component="input" type="email" placeholder="Email" required />
        <Field name="password" component="input" type="password" placeholder="Passowrd" required/>
        <button type="submit" disabled={submitting || pristine}>Create Account</button>
      </form>
    );
  }

  public render() {
    return (
      <div>
        <h1>Signup to short Link</h1>
        {this.state.error ? <p>{this.state.error} </p> : undefined}
        <Form onSubmit={this.onCreateAccount} render={this.makeForm}/>
        <Link to="/">Already have a account?</Link>
      </div>
    );
  }
}