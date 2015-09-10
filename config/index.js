// Must be ES5

var p = require('../package.json');

module.exports = function config () {
  return {
    name: p.name,
    description: p.description,
    port: process.env.PORT || 3000
  };
};
