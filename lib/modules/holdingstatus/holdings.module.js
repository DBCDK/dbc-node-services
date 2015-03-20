var transform = require('./transform/holdings.transform.js');
var openHoldingstatus = require('../../clients/openHoldingstatus.client');

module.exports.getHoldings = function (data, user) {

 return openHoldingstatus.holdings(data)
 .then(transform);
}
