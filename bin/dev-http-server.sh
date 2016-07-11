#!/bin/sh

echo 'Run development http-server...'

./bin/http-server -a 0.0.0.0 -p 8000 -c-1 src/pub
