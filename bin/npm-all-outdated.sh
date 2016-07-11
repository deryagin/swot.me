#!/bin/sh

echo 'Check outdated project dependencies for all package.json...'

(cd pub/vendor; pwd; npm outdated)
(cd srv/vendor; pwd; npm outdated)
(cd test/vendor; pwd; npm outdated)
(cd dpl/vendor; pwd; npm outdated)
