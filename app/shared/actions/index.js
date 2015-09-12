'use strict';
import fetch from 'isomorphic-fetch';

export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS';

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

export const PAGE_LOADING = 'PAGE_LOADING';
export function pageLoading() {
  return {
    type: PAGE_LOADING,
    isLoading: true
  };
}

export const PAGE_LOADED = 'PAGE_LOADED';
export function pageLoaded() {
  return {
    type: PAGE_LOADED,
    isLoading: false
  };
}

export function fetchFollowers(){
  return function (dispatch) {
    dispatch(pageLoading());
    dispatch(requestFollowers());
    return fetch(`https://api.github.com/users/ryardley/following`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveFollowers(json));
        dispatch(pageLoaded());
      });
  };
}
