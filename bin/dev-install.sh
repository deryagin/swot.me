#!/bin/sh

echo 'Install all (prod and dev) project dependencies...'

(cd pub/vendor; pwd; npm install --only=dev);
(cd srv/vendor; pwd; npm install --only=dev);
(cd test/vendor; pwd; npm install --only=dev);
(cd dpl/vendor; pwd; npm install --only=dev);
