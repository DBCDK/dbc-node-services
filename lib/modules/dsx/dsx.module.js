var transform = {
  search : require('./transform/dsx.search.transform'),
  rank : require('./transform/dsx.rank.transform')

}
var dsx = require('../../clients/dsx.client');

module.exports.search = function(data) {
  return dsx.search(data.query)
   .then(transform.search);
}
module.exports.recommend = function(data) {
  return dsx.recommend(data.query)
   .then(transform.rank);
}
module.exports.rank = function(data) {
  return dsx.rank(data.query)
   .then(transform.rank);
}
