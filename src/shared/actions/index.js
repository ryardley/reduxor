'use strict';

import {createAction} from 'redux-actions';
import {createClient} from '../nector';
import server from '../../server/middleware/nector';

const origin =(typeof window !== 'undefined') ? window.location.origin : server;
const client = createClient(origin);
export const fetchFollowingAction = createAction('FETCH_FOLLOWERS', () => {
  return client('fetchFollowing')();
});
