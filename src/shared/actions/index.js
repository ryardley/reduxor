'use strict';

import {createAction} from 'redux-actions';
import {createClient} from '../nector';

const client = createClient('http://localhost:3181');

export const fetchFollowingAction = createAction('FETCH_FOLLOWERS', () => {
  return client('fetchFollowing')();
});
