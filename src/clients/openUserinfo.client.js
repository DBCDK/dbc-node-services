"use strict";

var baseclient = require("./Base.client");
var config = baseclient.config.openuserinfo;

var _default = {
  securityCode: config.securityCode,
  outputType: "soap"
};
var openUserinfo = baseclient.client(config.wsdl, _default);

var options = {
  endpoint: config.endpoint
};

module.exports = {
  cart: {
    getCart: function (user) {
      return openUserinfo.request("getCart", { userId: user }, options, true);
    },
    addCartContent: function (content) {
      return openUserinfo.request("addCartContent", content, options, true);
    },
    removeCartContent: function (content) {
      return openUserinfo.request("removeCartContent", content, options, true);
    }
  },
  user: {
    login: function (user) {
      return openUserinfo.request("login", { userId: user.name, userPinCode: user.password }, options);
    }
  }
};