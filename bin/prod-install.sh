#!/bin/sh

echo 'Install production only project dependencies...'

(cd pub/vendor; pwd; npm install --only=prod);
(cd srv/vendor; pwd; npm install --only=prod);
(cd dpl/vendor; pwd; npm install --only=prod);
