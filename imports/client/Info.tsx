import * as React from 'react';
import { Accounts } from 'meteor/accounts-base';
import {
  EuiFlexGroup, EuiFlexItem, EuiButton, EuiPage, EuiSpacer,
  EuiPageBody, EuiPageHeader,  EuiPageContent, EuiPageContentBody, EuiTitle
} from '@elastic/eui';

import AddLink from './pages/link/AddLink';
import LinkList from './pages/link/LinkList';
import { RootState } from '../startup/client/store';
import { withLink } from '../api/links.tracker';

interface InfoProps {
  links: any;
  loading: boolean
}

class Info extends React.Component<InfoProps, any> {

  linkList() {
    const { links, loading } = this.props;
    if (loading) {
      return <div>loading...</div>
    } else {
      return <LinkList links={links} />
    }
  }

  onLogout = () => {
    Accounts.logout();
  }

  render() {
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
              <EuiFlexGroup justifyContent="spaceBetween">
                <EuiFlexItem grow={1} style={{ paddingLeft: 20 }}>
                  <EuiTitle size="m"><h1>Add Link & List</h1></EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem style={{ maxWidth: 130, paddingRight: 30 }}>
                  <EuiButton style={{ maxWidth: 100 }} onClick={this.onLogout}>Log out</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentBody>
              <EuiFlexGroup direction="column" justifyContent="spaceBetween">
                <EuiFlexItem style={{ maxWidth: 800 }}>
                  <AddLink /> 
                </EuiFlexItem>
                <EuiSpacer />
                <EuiFlexItem style={{ maxWidth: 400 }}>
                  {this.linkList()}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}

const mapProps = (state: RootState) => ({
  
});

export default withLink(mapProps, Info);
