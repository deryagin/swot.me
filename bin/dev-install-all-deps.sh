#!/bin/sh

echo 'Install all (prod and dev) project dependencies...'

(cd src/dbs/vendor; pwd; npm install --only=dev);
(cd src/web/vendor; pwd; npm install --only=dev);
(cd src/srv/vendor; pwd; npm install --only=dev);
(cd test/vendor; pwd; npm install --only=dev);
(cd dpl/vendor; pwd; npm install --only=dev);
