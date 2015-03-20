var transform = require('./transform/dsx.transform');
var dsx = require('../../clients/dsx.client');

module.exports.search = function(data) {
  return dsx.search(data.query)
   .then(transform);
}
