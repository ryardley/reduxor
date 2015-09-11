'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import connectToStores from 'alt/utils/connectToStores';
import FollowersStore from '../stores/FollowersStore';
import FollowersActions from '../actions/FollowersActions';

@connectToStores
export default class Followers extends React.Component {

  static componentDidConnect () {
    FollowersActions.fetchFollowers();
  }

  static getStores() {
    return [FollowersStore];
  }

  static getPropsFromStores() {
    return FollowersStore.getState();
  }

  renderFollower (follower, index) {
    return (
      <li key={index}>{follower}</li>
    );
  }

  render () {
    var followers = this.props.followers || [];
    return (
      <DocumentTitle title='Followers'>
        <div>
          <h4>Followers</h4>
          <ul>
            {followers.map(this.renderFollower)}
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}
