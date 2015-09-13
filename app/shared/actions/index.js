'use strict';

import followers from '../services/followers';

export const REQUEST_FOLLOWERS = 'REQUEST_FOLLOWERS';
export function requestFollowers() {
  return {
    type: REQUEST_FOLLOWERS
  };
}

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export function receiveFollowers(following) {
  return {
    type: RECEIVE_FOLLOWERS,
    following
  };
}

export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS';
export function fetchFollowers(){
  return function (dispatch) {
    dispatch(requestFollowers());
    return followers()
      .then((json) => {
        dispatch(receiveFollowers(json));
        return json;
      });
  };
}
