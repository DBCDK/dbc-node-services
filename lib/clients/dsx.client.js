var Promise = require('es6-promise').Promise;
var Client = require('node-rest-client').Client;
var client = new Client();

// registering remote methods
client.registerMethod("search", "http://ml-t01.dbc.dk:8019/search", "POST");

module.exports.search = function (data) {
  var args = {
    data : JSON.stringify({ words : data}),
  }
  return new Promise((resolve, reject) => {
    client.methods.search(args, (data, response) => {
      resolve(JSON.parse(data));
    });
  });
}
