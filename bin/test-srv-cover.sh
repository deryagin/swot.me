#!/bin/sh

echo 'Run istanbul test coverage for Back-End...'

./bin/istanbul cover --config=test/config/istanbul.yml \
  ./bin/mocha -- --reporter dot --opts test/config/mocha.opts
