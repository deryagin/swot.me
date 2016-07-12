#!/bin/sh

echo 'Npm shrinkwrap project dependencies for all package.json...'

(cd src/dbs/vendor; pwd; npm shrinkwrap --dev)
(cd src/pub/vendor; pwd; npm shrinkwrap --dev)
(cd src/srv/vendor; pwd; npm shrinkwrap --dev)
(cd test/vendor; pwd; npm shrinkwrap --dev)
(cd dpl/vendor; pwd; npm shrinkwrap --dev)
