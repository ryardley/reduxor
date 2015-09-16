'use strict';

import {createAction} from 'redux-actions';
import nector from '../nector';


export const fetchFollowingAction = createAction('FETCH_FOLLOWERS', () => {
  const client = nector.createClient();
  return client('fetchFollowing')();
});
