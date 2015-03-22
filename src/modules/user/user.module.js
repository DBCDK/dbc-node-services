"use strict";

var openUserinfo = require("../../clients/openUserinfo.client");

module.exports.login = function (data) {
  return openUserinfo.user.login(data);
};