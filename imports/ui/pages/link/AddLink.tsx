import * as React from 'react';
import { connect } from 'react-redux';
import { addLink } from './link.action';

export interface AddLinkProps {
  addLink: Function;
}

class AddLink extends React.Component<AddLinkProps, any> {
  title: any = React.createRef();
  url: any = React.createRef();

  handleSubmit = (e: any) => {
    e.preventDefault();
    const param = {
      title: this.title.current.value,
      url: this.url.current.value
    }
    const { addLink } = this.props;
    addLink(param);
  };

  public render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" ref={this.title} name="title" placeholder="title" />
        <input type="text" ref={this.url} name="url" placeholder="url" />
        <button>Add Link</button>
      </form>
    )
  }
}

export default connect(undefined, { addLink })(AddLink);