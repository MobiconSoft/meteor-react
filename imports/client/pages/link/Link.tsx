import * as React from 'react';
import { removeLink } from './link.action';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EuiButton } from '@elastic/eui';
import { JRow } from '../../layouts/common.style';

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
      <JRow>
        <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
          <EuiButton size="s" style={{minWidth: 40, marginLeft: 10}} onClick={this.deleteLink}>x</EuiButton>
        </li>
      </JRow>
    );
  }
}

export default connect(undefined, { removeLink })(Link);
