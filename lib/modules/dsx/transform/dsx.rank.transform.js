var transform = require('jsonpath-object-transform');

module.exports = function(result) {
  console.log(result);
  let collections = result.result.map((element) => {
    let fields = element[1].ctkey.split('::');
    return {
      id : element[0],
      title : fields[0],
      creator : [fields[1]],
      abstract : null
    }
  });
  return {
    collections : collections
  }
};
