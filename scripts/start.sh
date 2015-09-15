#!/bin/bash

# DEFINE FUNCTIONS

start_prod(){
  ./node_modules/.bin/link-package ./.srv src
  node ./.srv/index.js
}

start_dev(){
  ./node_modules/.bin/link-package ./src src
  # TODO: the followiing is not being killed correctly upon ctrl+c
  ./node_modules/.bin/nodemon --exec ./node_modules/.bin/babel-node ./src/index.js & P=$!
  trap "kill $P" EXIT
  webpack-dev-server
}


# RUN NOW
case "$NODE_ENV" in
  production)   start_prod   ;;
           *)   start_dev    ;;
esac

