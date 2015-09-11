'use strict';
import GithubService from '../services/GithubService';
import alt from '../../alt';

class FollowersActions {
  fetchFollowers () {
    GithubService.fetchFollowing()
      .then((following) => {
        this.dispatch(following);
      });
  }
}

export default alt.createActions(FollowersActions);
