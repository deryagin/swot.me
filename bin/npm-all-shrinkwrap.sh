#!/bin/sh

echo 'Npm shrinkwrap project dependencies for all package.json...'

(cd pub/vendor; pwd; npm shrinkwrap --dev)
(cd srv/vendor; pwd; npm shrinkwrap --dev)
(cd test/vendor; pwd; npm shrinkwrap --dev)
(cd dpl/vendor; pwd; npm shrinkwrap --dev)
