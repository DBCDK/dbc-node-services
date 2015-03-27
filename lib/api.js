var search = require('./modules/search/search.module');
var dsx = require('./modules/dsx/dsx.module');
var holdings = require('./modules/holdingstatus/holdings.module');
var frontpage = require('./modules/frontpage/frontpage.module');
var cart = require('./modules/cart/cart.module');
var user = require('./modules/user/user.module');
var Dispatcher = require('./dispatcher');

module.exports.init = function(io) {
  //initiate dispatcher
  var dispatcher = Dispatcher();
  dispatcher.init(io);

  // Setup search listeners
  dispatcher.listen('search', search.search);

  // Setup dsx listeners
  dispatcher.listen('dsxSearch', dsx.search);
  dispatcher.listen('dsxRecommend', dsx.recommend);
  dispatcher.listen('dsxRank', dsx.rank);
  dispatcher.listen('dsxRankSearch', dsx.rankSearch);

  // Setup Cart listeners
  dispatcher.listen('getCart', cart.getCart);
  dispatcher.listen('addCartContent', cart.addCartContent);
  dispatcher.listen('removeCartContent', cart.removeCartContent);

  //Setup frontpage listeners
  dispatcher.listen('getImages', frontpage.getImages);

  //Setup holdings listeners
  dispatcher.listen('getHoldings', holdings.getHoldings);
};

module.exports.modules = {
  search: search,
  dsx: dsx,
  holdings: holdings,
  frontpage: frontpage,
  cart: cart,
  user: user
};
