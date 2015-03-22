"use strict";

var transform = require("jsonpath-object-transform");

module.exports = function (result) {
  var collections = result.result.map(function (element) {
    var fields = element.key.split("::");
    return {
      id: element.pid,
      title: fields[0],
      creator: [fields[1]],
      abstract: null
    };
  });
  return {
    collections: collections
  };
};