"use strict";

var baseclient = require("./base.client"),
    config = baseclient.config.opensearch;

var _default = {
  agency: config.agency,
  profile: config.profile,
  start: 1,
  stepValue: 10,
  sort: "rank_frequency",
  collectionType: "manifestation"
};

var opensearch = baseclient.client(config.wsdl, _default);

module.exports = {
  search: function (query) {
    return opensearch.request("searchOperation", { query: query });
  },
  objectGet: function (pid) {
    return opensearch.request("objectGet", { pid: pid });
  }
};