#!/bin/sh

echo 'Run Back-End using nodemon tool...'

./bin/nodemon --verbose --watch src/srv/ -- src/srv/server.js
