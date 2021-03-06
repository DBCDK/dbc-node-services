'use strict';

jest.autoMockOff();

describe('transform searchresult', function() {
  var dkabm = require('../dkabm.transform');
  var obj = require('./data/searchresult.json');
  var expected = require('./data/transformed-object.json');
  it('transforms dkabm to dictated format', function() {
    var result = dkabm(obj);
    expect(JSON.stringify(result.collections[1])).toEqual(JSON.stringify(expected));
  });
});
