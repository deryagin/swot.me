#!/bin/sh

echo 'Run Back-End using nodemon tool...'

./bin/nodemon --verbose --watch srv/ -- srv/server.js
