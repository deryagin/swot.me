module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.delete = remove;
module.exports.list = list;

function create(req, res) {
  res.send(arguments.callee.name);
}

function read(req, res) {
  res.send(arguments.callee.name);
}

function update(req, res) {
  res.send(arguments.callee.name);
}

function remove(req, res) {
  res.send(arguments.callee.name);
}

function list(req, res) {
  res.send(arguments.callee.name);
}
