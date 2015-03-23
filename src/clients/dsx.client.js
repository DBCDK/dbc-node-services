"use strict";
var config = require.main.require("./config.js").dsx;
var Promise = require("es6-promise").Promise;
var Client = require("node-rest-client").Client;
var client = new Client();

// registering remote methods
client.registerMethod("search", config.endpoint + "search", "POST");
client.registerMethod("recommend", config.endpoint + "recommend", "POST");
client.registerMethod("rank", config.endpoint + "rank", "POST");

module.exports.search = function (data) {
  var args = {
    data: JSON.stringify({ words: data }) };
  return new Promise(function (resolve, reject) {
    client.methods.search(args, function (data, response) {
      resolve(JSON.parse(data));
    });
  });
};

module.exports.recommend = function (data) {
  var args = {
    data: JSON.stringify({ like: data }) };
  return new Promise(function (resolve, reject) {
    client.methods.recommend(args, function (data, response) {
      console.log(response, "resposne");
      resolve(JSON.parse(data));
    });
  });
};

module.exports.rank = function (data) {
  var args = {
    data: JSON.stringify({ words: data }) };
  return new Promise(function (resolve, reject) {
    client.methods.recomment(args, function (data, response) {
      resolve(JSON.parse(data));
    });
  });
};
