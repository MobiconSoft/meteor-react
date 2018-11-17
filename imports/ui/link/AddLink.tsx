import * as React from 'react';
import { linkService } from './links.service';
export interface AddLinkProps {
}
export default class AddLink extends React.Component<AddLinkProps, any> {
  handleSubmit = (e: any) => {
    //ignore validation
    e.preventDefault();
    const param = {
      title: e.target.title.value,
      url: e.target.url.value
    }
    linkService.addLink(param);
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
