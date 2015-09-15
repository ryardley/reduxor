'use strict';
import {handleActions} from 'redux-actions';

export default handleActions({
  FETCH_FOLLOWERS: (state, action) => {
    const followers = action.payload;
    return followers.length ? followers.map((follower) => follower.login) : [];
  }
}, []);
