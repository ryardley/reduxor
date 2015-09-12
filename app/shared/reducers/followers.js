'use strict';

import {RECEIVE_FOLLOWERS} from '../actions';

export default function followers(state = [], action) {
  switch (action.type) {
  case RECEIVE_FOLLOWERS:
    return action.following.map((f) => f.login);
  default:
    return state;
  }
}
