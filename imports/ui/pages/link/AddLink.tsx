import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';
import { Form, Field } from 'react-final-form';

export interface AddLinkProps {
  addLink: Function;
}

class AddLink extends React.Component<AddLinkProps, any> {

  handleSubmit = (params) => {
    const { addLink } = this.props;
    addLink(params);
  };

  makeForm = ({handleSubmit, submitting, pristine}) => {
    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" component="input" type="text" placeholder="Title" required />
        <Field name="url" component="input" type="text" placeholder="Url" required />
        <button type="submit" disabled={submitting || pristine}>Add Link</button>
      </form>
    );
  }

  public render() {
    return (<Form onSubmit={this.handleSubmit} render={this.makeForm} />);
  }
}

export default connect(undefined, { addLink })(AddLink);