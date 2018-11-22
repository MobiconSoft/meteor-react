import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';

export interface AddLinkProps {
  addLink: Function;
}

class AddLink extends React.Component<AddLinkProps, any> {
  handleSubmit = (e: any) => {
    //ignore validation
    e.preventDefault();
    const param = {
      title: e.target.title.value,
      url: e.target.url.value
    }
    const { addLink } = this.props;
    addLink(param);
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="url" placeholder="url" />
        <button>Add Link</button>
      </form>
    )
  }
}

export default connect(undefined, { addLink })(AddLink);