import * as React from 'react';
import Links from '../api/links';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import AddLink from './link/AddLink';
import LinkList from './link/LinkList';

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

export default withTracker(() => {
  const handle = Meteor.subscribe('links');
  return {
    links: Links.find().fetch(),
    loading: !handle.ready()
  };
})(Info);
