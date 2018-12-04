import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';
import { Form, Field } from 'react-final-form';
import EInput from '../../sdk/eui/eui-final-input';
import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { StyledLongEuiFlexItem, StyledShortEuiFlexItem } from '../../sdk/eui/flexgroup.style';

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
        <EuiFlexGroup direction="row" gutterSize="s">
          <EuiFlexItem><EInput name="title" component="input" type="text" placeholder="Title" /></EuiFlexItem>
          <StyledLongEuiFlexItem background="red"><EInput name="url" component="input" type="text" placeholder="Url" /></StyledLongEuiFlexItem>
          <StyledShortEuiFlexItem>
            <EuiButton type="submit" fill disabled={submitting || pristine}>Add Link</EuiButton>
          </StyledShortEuiFlexItem>
        </EuiFlexGroup>
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