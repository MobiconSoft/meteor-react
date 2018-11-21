import * as React from 'react';
import { removeLink } from './link.action';
import { connect } from 'react-redux';

export interface LinkProps {
  link: any,
  removeLink: Function
}
class Link extends React.Component<LinkProps, any> {
  removeLink = () => {
    const { link, removeLink } = this.props;
    removeLink(link._id);
  }

  public render() {
    const { link } = this.props;
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
        <button onClick={this.removeLink}> x </button>
      </li>
    );
  }
}

export default connect(undefined, { removeLink })(Link);
