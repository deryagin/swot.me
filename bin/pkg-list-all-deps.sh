#!/bin/sh

echo 'List project dependencies for all package.json...'

(cd src/dbs/vendor; npm ls)
(cd src/web/vendor; npm ls)
(cd src/srv/vendor; npm ls)
(cd test/vendor; npm ls)
(cd dpl/vendor; npm ls)
