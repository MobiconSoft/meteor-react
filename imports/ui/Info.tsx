import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Links from '../api/links';
import AddLink from './pages/link/AddLink';
import LinkList from './pages/link/LinkList';
import { RootState } from './store';

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

  render() {
    return (
      <div>
        <AddLink />
        {this.linkList()}
      </div>
    );
  }
}


const mapProps = (state: RootState) => ({
  
});

export default compose(
  withTracker(() => {
    const handle = Meteor.subscribe('links');
    return {
      links: Links.find({}).fetch(),
      loading: !handle.ready()
    };
  }),
  connect(mapProps)
)(Info);
