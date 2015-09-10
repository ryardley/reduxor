// Must be ES5
'use strict';

var p = require('../package.json');

module.exports = function config () {
  return {
    name: p.name,
    description: p.description,
    port: process.env.PORT || 3000,
    assetHost: process.env.ASSET_HOST || 'http://localhost:8080'
  };
};
