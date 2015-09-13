import fetch from 'isomorphic-fetch';

export function fetchFollowing(){
  return fetch(`https://api.github.com/users/ryardley/following`)
    .then((response) => response.json());
}
