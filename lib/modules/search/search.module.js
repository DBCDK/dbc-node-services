var transform = require('./transform/dkabm.transform.js');
var opensearch = require('../../lib/clients/openSearch.client');

module.exports.search = function(data) {
  return opensearch.search(data.query)
    .then(transform);
}
