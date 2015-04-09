"use strict";

var transform = require("./transform/images.transform.js");
var moreinfo = require("../../clients/moreinfo.client");

module.exports.getImages = function (data, user) {
  return moreinfo.info(data.pid).then(function (result) {
    return {
      pid: data.pid,
      images: transform(result).images
    };
  });
};