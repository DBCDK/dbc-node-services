"use strict";

var baseclient = require("./Base.client"),
    config = baseclient.config.openholdingstatus,
    _default = {},
    openHoldingsstatus = baseclient.client(config.wsdl, _default);

module.exports = {
  holdings: function (query) {
    return openHoldingsstatus.request("holdingsService", {
      lookupRecord: query
    });
  }
};