import * as React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Form, Field } from 'react-final-form';

export interface LoginProps {
  history: any;
}

export interface LoginState {
  error: string;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  // email: any = React.createRef();
  // password: any = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onLogin = ({email, password}) => {
    // e.preventDefault();
    // let email = this.email.current.value.trim();
    // let password = this.password.current.value.trim();
    if (!email || !password) {
      this.setState({error: 'Please input email and password both'});
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

  makeForm = ({ handleSubmit, submitting, pristine, values }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component="input" type="email" placeholder="Email" required/>
        <Field name="password" component="input" type="password" placeholder="Passowrd" required/>
        {/* <input type="email" ref={this.email} name="email" placeholder="Email" />
        <input type="password" ref={this.password} name="password" placeholder="Password" /> */}
        <button type="submit" disabled={submitting || pristine}>Login</button>
      </form>
    );
  };

  public render() {
    return (
      <div>
        <h1>Login to short Link</h1>
        {this.state.error ? <p>{this.state.error} </p> : undefined}
        <Form onSubmit={this.onLogin} render={this.makeForm}
        />
        <Link to="/signup">Have a account?</Link>
      </div>
    );
  }
}
