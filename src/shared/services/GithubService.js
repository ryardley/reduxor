'use strict';
import superagent from 'superagent';

export default class GithubService {
  static fetchFollowing () {
    return new Promise((resolve, reject) => {
      superagent
        .get('https://api.github.com/users/ryardley/following')
        .end((err, data) => {
          if(err){
            reject(err);
          }
          if(!data.body){
            reject(err);
          }
          resolve(data.body);
        });
    });
  }
}
