var p = require('../package.json');

module.exports = {
  name: p.name,
  longName: p.description,
  port: process.env.PORT || 3000
};
