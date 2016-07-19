var collection = require('./fixture.json');

module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.delete = deleteIt;

function create(req, res) {
  var text = req.body;
  text.id = Math.round(Math.random() * 1000000);
  text.createdAt = new Date();
  text.accessedAt = new Date();
  collection.push(text);
  res.json(text);
}

function read(req, res) {
  var text = collection.find(function (item) {
    return item.id === req.body.id;
  });
  text = (text ? text : null);
  res.json(text);
}

function update(req, res) {
  var text = collection.find(function (item) {
    return item.id === req.body.id;
  });

  if (!text) {
    return res.json('Not found!')
  }

  text.title = req.body.title;
  text.accessedAt = new Date();
  text.content = req.body.content;
  res.json(text);
}

function deleteIt(req, res) {
  var deletedCount = 0;
  collection = collection.filter(function (item) {
    if (item.id === req.body.id) {
      deletedCount = deletedCount + 1;
      return false;
    }
    return true;
  });

  res.json(deletedCount);
}
