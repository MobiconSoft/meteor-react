import * as React from 'react';
import Link from './Link';

export interface LinkListProps {
  links: any[]
}

export default class LinkList extends React.Component<LinkListProps, any> {
  public render() {
    const links = this.props.links.map(
      link => <Link link={link}/>
    );
    return (
      <div>
        <h2>Links</h2>
        <ul>{links}</ul>
      </div>
    );
  }
}
