"use strict";

var Promise = require("es6-promise").Promise;
var Client = require("node-rest-client").Client;
var client = new Client();

// registering remote methods
client.registerMethod("search", "http://dsx-t01:8019/search", "POST");
client.registerMethod("recommend", "http://dsx-t01:8019/recommend", "POST");
client.registerMethod("rank", "http://dsx-t01:8019/rank", "POST");

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