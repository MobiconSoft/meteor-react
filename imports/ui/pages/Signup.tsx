import * as React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export interface SignupProps {
}

export default class Signup extends React.Component<SignupProps, any> {
  // @see https://goenning.net/2016/11/02/strongly-typed-react-refs-with-typescript/
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

  onCreateAccount = (e: any) => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

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
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Create Acount</button>
        </form>
        <Link to="/login">Already have a account?</Link>
      </div>
    );
  }
}