#!/bin/sh

echo 'Run Back-End using node-debug tool...'

./bin/node-debug --cli --debug-brk=false --preload=false --save-live-edit=true srv/server.js
