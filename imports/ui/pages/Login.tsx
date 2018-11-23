import * as React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export interface LoginProps {
  history: any;
}

export interface LoginState {
  error: string;
}

export default class Login extends React.Component<LoginProps, LoginState> {
  email: any = React.createRef();
  password: any = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onLogin = (e: any) => {
    e.preventDefault();

    let email = this.email.current.value.trim();
    let password = this.password.current.value.trim();
    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  public render() {
    return (
      <div>
        <h1>Login to short Link</h1>
        {this.state.error ? <p>{this.state.error} </p> : undefined}
        <form onSubmit={this.onLogin}>
          <input type="email" ref={this.email} name="email" placeholder="Email" />
          <input type="password" ref={this.password} name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <Link to="/signup">Have a account?</Link>
      </div>
    );
  }
}
