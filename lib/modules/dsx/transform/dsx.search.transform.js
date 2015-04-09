var transform = require('jsonpath-object-transform');

module.exports = function(result) {
  let collections = result.result.map((element) => {
    let fields = element.key.split('::');
    return {
      id : element.pid,
      title : fields[0],
      creator : [fields[1]],
      abstract : null
    }
  });
  return {
    collections : collections
  }
};
