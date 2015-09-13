'use strict';

import {createAction} from 'redux-actions';
import {fetchFollowing} from '../services/github';

export const fetchFollowingAction = createAction('FETCH_FOLLOWERS', () => fetchFollowing());
