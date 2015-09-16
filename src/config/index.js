// Must be ES5 as used by webpack

'use strict';

import p from '../../package.json';

export default function config () {
  return {
    // vital stats
    name: p.name,
    description: p.description,

    // launch environment
    port: process.env.PORT || 3000,
    assetHost: process.env.ASSET_HOST || 'http://localhost:8080',

    // packages to be aliased
    linkPackages: [
      {path:'app', alias:'app'}
    ]
  };
}


