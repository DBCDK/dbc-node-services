"use strict";

var transform = {
  search: require("./transform/dsx.search.transform"),
  rank: require("./transform/dsx.rank.transform")
};
var dsx = require("../../clients/dsx.client");

var search = function search(data) {
  return dsx.search(data.query).then(transform.search);
};

var recommend = function recommend(data) {
  return dsx.recommend(data.query).then(transform.rank);
};

var rank = function rank(data) {
  return dsx.rank(data).then(transform.rank);
};

var rankSearch = function rankSearch(data) {
  return search(data).then(function (result) {
    return {
      like: data.like,
      set: result.collections.map(function (item) {
        return item.id;
      })
    };
  }).then(dsx.rank).then(transform.rank);
};

module.exports = {
  search: search,
  recommend: recommend,
  rank: rank,
  rankSearch: rankSearch
};