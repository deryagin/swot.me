#!/bin/sh

echo 'Install production only project dependencies...'

(cd src/dbs/vendor; pwd; npm install --only=prod);
(cd src/pub/vendor; pwd; npm install --only=prod);
(cd src/srv/vendor; pwd; npm install --only=prod);
(cd dpl/vendor; pwd; npm install --only=prod);
