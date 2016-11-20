var collection = require('./fixture.json');

module.exports.read = read;
module.exports.delete = deleteId;

function read(req, res) {
  res.json(collection);
}

function deleteId(req, res) {
  var deletedCount = 0;
  collection = collection.filter(function (item) {
    if (req.body.includes(item.id)) {
      deletedCount = deletedCount + 1;
      return false;
    }
    return true;
  });

  res.json(deletedCount);

}
