#!/bin/sh

echo 'Run development json-server...'

./bin/json-server --host='0.0.0.0' --port=3000 --static='src/pub' tmp/dbs.json
