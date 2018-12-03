import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';
import { Form, Field } from 'react-final-form';
import { Row, Col, Button } from 'antd';
import AInput from '../../sdk/antd/antd-final-input';

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
        <Col span={4}><AInput name="title" component="input" type="text" placeholder="Title" /></Col>
        <Col span={4}><AInput name="url" component="input" type="text" placeholder="Url" /></Col>
        <Button type="primary" htmlType="submit" disabled={submitting || pristine}>Add Link</Button>
      </form>
    );
  }

  public render() {
    return (<Form onSubmit={this.handleSubmit} render={this.makeForm} />);
  }
}

export default connect(undefined, { addLink })(AddLink);