"use strict";

var Promise = require("es6-promise").Promise;
var Client = require("node-rest-client").Client;
var Config = require.main.require("./config.js");
var client = new Client();

/**
 * Namespace for a dsx service can be configured with env variables
 * @type {Object}
 */
var serviceNameSpaces = {
  search: process_env.DSX_SEARCH || "search",
  recommend: process_env.DSX_RECOMMEND || "recommend",
  rank: process_env.DSX_RANK || "rank" };
var dsxEndpoint = process_env.DSX_URL || Config.dsx.endpoint;
var searchEndpoint = dsxEndpoint + serviceNameSpaces.search;
var recommendEndpoint = dsxEndpoint + serviceNameSpaces.recommend;
var rankEndpoint = dsxEndpoint + serviceNameSpaces.rank;

// registering remote methods
client.registerMethod("search", searchEndpoint, "POST");
client.registerMethod("recommend", recommendEndpoint, "POST");
client.registerMethod("rank", rankEndpoint, "POST");

module.exports.search = function (data) {
  var args = {
    data: JSON.stringify({ words: data })
  };
  return new Promise(function (resolve, reject) {
    client.methods.search(args, function (data, response) {
      resolve(JSON.parse(data));
    });
  });
};

module.exports.recommend = function (data) {
  var args = {
    data: JSON.stringify({ like: data })
  };
  return new Promise(function (resolve, reject) {
    client.methods.recommend(args, function (data, response) {
      resolve(JSON.parse(data));
    });
  });
};

module.exports.rank = function (data) {
  var args = {
    data: JSON.stringify({ like: data.like, set: data.set })
  };
  return new Promise(function (resolve, reject) {
    client.methods.rank(args, function (data, response) {
      resolve(JSON.parse(data));
    });
  });
};