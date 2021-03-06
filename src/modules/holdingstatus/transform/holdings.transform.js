"use strict";

module.exports = function mutateHoldingsResponse(response) {
  if (response.responder) {
    var holding = response.responder;
    return {
      pid: holding.pid,
      home: Date.parse(Date().slice(0, 15)) == Date.parse(new Date(holding.expectedDelivery).toLocaleDateString()),
      willLend: response.responder.willLend === "true",
      expectedDelivery: new Date(holding.expectedDelivery).toLocaleDateString() };
  } else {
    var holding = response.error;
    return {
      pid: holding.pid,
      home: false,
      willLend: false,
      error: true,
      errorMessage: holding.errorMessage
    };
  }
};