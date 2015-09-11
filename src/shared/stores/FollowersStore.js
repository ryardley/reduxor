'use strict';

import alt from '../../alt';
import FollowersActions from '../actions/FollowersActions';

class FollowersStore {
  constructor() {
    this.bindActions(FollowersActions);
    this.state = {
      followers: []
    };
  }

  fetchFollowers(following) {
    this.setState({
      followers: following.map((f) => f.login)
    });
  }
}

export default alt.createStore(FollowersStore, 'FollowersStore');
