import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export interface SignupProps {
}

export interface LoginState {
  error: string;
}

export default class Signup extends React.Component<SignupProps, LoginState> {
  email: any = React.createRef();
  password: any = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onCreateAccount = (e: any) => {
    e.preventDefault();

    let email = this.email.current.value.trim();
    let password = this.password.current.value.trim();
    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });

    // this.setState({
    //   error: 'something wrong'
    // });
  }

  public render() {
    return (
      <div>
        <h1>Signup to short Link</h1>
        {this.state.error ? <p>{this.state.error} </p> : undefined}
        <form onSubmit={this.onCreateAccount}>
          <input type="email" ref={this.email} name="email" placeholder="Email" />
          <input type="password" ref={this.password} name="password" placeholder="Password" />
          <button>Create Acount</button>
        </form>
        <Link to="/login">Already have a account?</Link>
      </div>
    );
  }
}