import fetch from 'isomorphic-fetch';

export default function followers(){
  return fetch(`https://api.github.com/users/ryardley/following`)
    .then((response) => response.json());
}
