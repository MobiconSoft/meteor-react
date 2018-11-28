import * as React from 'react';
import { removeLink } from './link.action';
import { connect } from 'react-redux';

export interface LinkProps {
  link: any,
  removeLink: Function
}
class Link extends React.Component<LinkProps, any> {
  deleteLink = () => {
    const { link, removeLink } = this.props;
    removeLink(link._id);
  }

  public render() {
    const { link } = this.props;
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
        <button onClick={this.deleteLink}> x </button>
      </li>
    );
  }
}

export default connect(undefined, { removeLink })(Link);
