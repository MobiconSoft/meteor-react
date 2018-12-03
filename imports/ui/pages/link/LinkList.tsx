import * as React from 'react';
import Link from './Link';

export interface LinkListProps {
  links: any[]
}

export default class LinkList extends React.Component<LinkListProps, any> {
  public render() {
    const links = this.props.links.map(
      link => <Link key={link._id} link={link}/>
    );
    return (
      <div>
        <ul>{links}</ul>
      </div>
    );
  }
}
