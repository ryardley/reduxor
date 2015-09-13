'use strict';

import {createAction} from 'redux-actions';
import {fetchFollowing} from '../services/followers';

export const createFetchFollowers = createAction('FETCH_FOLLOWERS', () => fetchFollowing());
