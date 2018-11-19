import * as React from 'react';
import { linkService } from './link.service';

export interface LinkProps {
  link: any
}

export default class Link extends React.Component<LinkProps, any> {
  removeLink = () => {
    const { link } = this.props;
    linkService.removeLink(link._id);
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
