var Promise = require('es6-promise').Promise;
var Client = require('node-rest-client').Client;
var Config = require.main.require('./config.js');
var client = new Client();

var dsxEndpoint = Config.dsx.endpoint;
var searchEndpoint = dsxEndpoint + "search";
var recommendEndpoint = dsxEndpoint + "recommend";
var rankEndpoint = dsxEndpoint + "rank";

// registering remote methods
client.registerMethod("search", searchEndpoint, "POST");
client.registerMethod("recommend", recommendEndpoint, "POST");
client.registerMethod("rank", rankEndpoint, "POST");

module.exports.search = function(data) {
  var args = {
    data: JSON.stringify({words: data})
  };
  return new Promise((resolve, reject) => {
    client.methods.search(args, (data, response) => {
      resolve(JSON.parse(data));
    });
  });
};

module.exports.recommend = function(data) {
  var args = {
    data: JSON.stringify({like: data})
  };
  return new Promise((resolve, reject) => {
    client.methods.recommend(args, (data, response) => {
      resolve(JSON.parse(data));
    });
  });
};

module.exports.rank = function(data) {
  var args = {
    data: JSON.stringify({like: data.like, set: data.set})
  };
  return new Promise(function(resolve, reject) {
    client.methods.rank(args, function(data, response) {
      resolve(JSON.parse(data));
    });
  });
};
