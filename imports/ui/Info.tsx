import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Links from '../api/links';
import AddLink from './link/AddLink';
import LinkList from './link/LinkList';
import { RootState } from './store';
import { loadLink } from './link/link.action';

interface InfoProps {
  links: any;
  linksMeteor: any;
  loadLink: any;
  loading: boolean
}

class Info extends React.Component<InfoProps, any> {
  
  componentDidUpdate() {
    const { loadLink, links } = this.props;  
    loadLink(links);
  }

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
  connect(mapProps, { loadLink })
)(Info);
