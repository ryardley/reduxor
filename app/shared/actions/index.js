'use strict';
import fetch from 'isomorphic-fetch';

export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS';

export const REQUEST_FOLLOWERS = 'REQUEST_FOLLOWERS';
function requestFollowers() {

  return {
    type: REQUEST_FOLLOWERS
  };
}

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
function receiveFollowers(following) {

  return {
    type: RECEIVE_FOLLOWERS,
    following
  };
}

export function fetchFollowers(){

  return function (dispatch) {
    dispatch(requestFollowers());
    return fetch(`https://api.github.com/users/ryardley/following`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveFollowers(json)));
  };
}
