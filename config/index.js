// Must be ES5
'use strict';

var p = require('../package.json');

module.exports = function config () {
  return {
    name: p.name,
    description: p.description,
    port: process.env.PORT || 3000,
    assetPort: process.env.ASSET_HOST || 8080
  };
};
