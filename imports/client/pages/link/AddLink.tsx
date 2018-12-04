import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';
import { Form } from 'react-final-form';
import EInput from '../../sdk/eui/eui-final-input';
import { EuiButton } from '@elastic/eui';
import { JFlexItem, JFlexGroup } from '../../sdk/eui/flexgroup.style';

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
        <JFlexGroup width="700px" direction="row" gutterSize="s">
          <JFlexItem><EInput name="title" component="input" type="text" placeholder="Title" /></JFlexItem>
          <JFlexItem><EInput name="url" component="input" type="text" placeholder="Url" /></JFlexItem>
          <JFlexItem width="100px">
            <EuiButton type="submit" fill disabled={submitting || pristine}>Add Link</EuiButton>
          </JFlexItem>
        </JFlexGroup>
      </form>
    );
  }

  public render() {
    return (
        <Form onSubmit={this.handleSubmit} render={this.makeForm} />
      );
  }
}

export default connect(undefined, { addLink })(AddLink);