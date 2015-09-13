'use strict';

import {createAction} from 'redux-actions';

import {getService} from '../nector';

const fetchFollowing = getService('fetchFollowing');

export const fetchFollowingAction = createAction('FETCH_FOLLOWERS', () => fetchFollowing());
