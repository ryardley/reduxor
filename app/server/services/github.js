import fetch from 'isomorphic-fetch';
import {createService} from '../../shared/nector';

createService('fetchFollowing', () => {
  return fetch(`https://api.github.com/users/ryardley/following`)
    .then((response) => response.json());
});
