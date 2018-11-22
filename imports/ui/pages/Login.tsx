import * as React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export interface LoginProps {
  history: any;
}

export default class Login extends React.Component<LoginProps, any> {
  public refs: {
    email: HTMLInputElement,
    password: HTMLInputElement
  }

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onLogin = (e: any) => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    console.log('login email: ', email, ', password: ', password);
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
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <Link to="/signup">Have a account?</Link>
      </div>
    );
  }
}
