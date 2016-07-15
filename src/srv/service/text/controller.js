module.exports.create = create;
module.exports.read = read;
module.exports.update = update;
module.exports.delete = deleteIt;
module.exports.list = list;

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

  collection.push(text);
  res.json(text);
}

function deleteIt(req, res) {
  collection = collection.filter(function (item) {
    return item.id !== req.body.id;
  });

  res.json(null);
}

function list(req, res) {
  res.json(collection);
}

var collection = [
  {
    id: '11111',
    title: 'Criminal Minds - 1x02',
    createdAt: '2016-06-09T09:31:55.362Z',
    accessedAt: '2016-06-09T10:31:55.362Z',
    content: 'This is "11111" text content.'
  },
  {
    id: '22222',
    title: 'Avatar (2009).TS.ViSiON.en',
    createdAt: '2016-07-09T09:31:55.362Z',
    accessedAt: '2016-06-10T10:31:55.362Z',
    content: 'This is "22222" text content.'
  },
  {
    id: '33333',
    title: 'Criminal Minds - 1x01 - Extreme Aggressor.en',
    createdAt: '2016-08-09T09:31:55.362Z',
    accessedAt: '2016-06-08T10:31:55.362Z',
    content: 'This is "33333" text content.'
  },
  {
    id: '44444',
    title: 'Criminal Minds - 1x01',
    createdAt: '2016-09-09T09:31:55.362Z',
    accessedAt: '2016-06-11T10:31:55.362Z',
    content: 'This is "44444" text content.'
  },
  {
    id: '55555',
    title: 'The.Passionate.Programmer.May.2009',
    createdAt: '2016-10-09T09:31:55.362Z',
    accessedAt: '2016-06-07T10:31:55.362Z',
    content: 'This is "55555" text content.'
  },
  {
    id: '66666',
    title: 'In Treatment - 1x02 - Alex - Week One.0TV.en',
    createdAt: '2016-11-09T09:31:55.362Z',
    accessedAt: '2016-06-12T10:31:55.362Z',
    content: 'This is "66666" text content.'
  },
  {
    id: '77777',
    title: 'In Treatment - 1x01 - Laura - Week One.2HD.en',
    createdAt: '2016-12-09T09:31:55.362Z',
    accessedAt: '2016-06-06T10:31:55.362Z',
    content: 'This is "77777" text content.'
  }
];
