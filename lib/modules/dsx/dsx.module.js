var transform = {
  search: require("./transform/dsx.search.transform"),
  rank: require("./transform/dsx.rank.transform")
};
var dsx = require("../../clients/dsx.client");

var search = function (data) {
  return dsx.search(data.query).then(transform.search);
};

var recommend = function (data) {
  return dsx.recommend(data.query).then(transform.rank);
};

var rank = function (data) {
  return dsx.rank(data).then(transform.rank);
};

var rankSearch = function (data) {
  return search(data).then((result) => {
   return {
    like: data.like,
    set: result.collections.map((item) => item.id)
   }
  })
  .then(dsx.rank).then(transform.rank);
};

module.exports = {
  search: search,
  recommend: recommend,
  rank: rank,
  rankSearch: rankSearch
}
