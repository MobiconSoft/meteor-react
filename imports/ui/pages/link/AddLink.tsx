import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';
import { Form, Field } from 'react-final-form';
import { Row, Col, Button } from 'antd';
import AInput from '../../sdk/antd/antd-final-input';
import EInput from '../../sdk/eui/eui-final-input';
import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

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
        {/* <Col span={4}><AInput name="title" component="input" type="text" placeholder="Title" /></Col>
        <Col span={4}><AInput name="url" component="input" type="text" placeholder="Url" /></Col>
        <Col span={2}><Button type="primary" htmlType="submit" disabled={submitting || pristine}>Add Link</Button></Col> */}
        <EuiFlexGroup direction="row" gutterSize="s">
          <EuiFlexItem><EInput name="title" component="input" type="text" placeholder="Title" /></EuiFlexItem>
          <EuiFlexItem><EInput name="url" component="input" type="text" placeholder="Url" /></EuiFlexItem>
          <EuiFlexItem style={{ maxWidth: 100 }}>
            <EuiButton type="submit" fill disabled={submitting || pristine}>Add Link</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </form>
    );
  }

  public render() {
    return (
      // <Row gutter={5}>
        <Form onSubmit={this.handleSubmit} render={this.makeForm} />
      // </Row>
      );
  }
}

export default connect(undefined, { addLink })(AddLink);