#!/bin/sh

echo 'Check outdated project dependencies for all package.json...'

(cd src/dbs/vendor; pwd; npm outdated)
(cd src/web/vendor; pwd; npm outdated)
(cd src/srv/vendor; pwd; npm outdated)
(cd test/vendor; pwd; npm outdated)
(cd dpl/vendor; pwd; npm outdated)
