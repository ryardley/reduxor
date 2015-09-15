#!/bin/bash

# DEFINE FUNCTIONS

BINF=./node_modules/.bin

start_prod(){
  ${BINF}/link-package ./.srv src
  node ./.srv/index.js
}

start_dev(){
  ${BINF}/link-package ./src src
  ${BINF}/concurrent "${BINF}/nodemon --exec ${BINF}/babel-node ./src/index.js" "webpack-dev-server"
}


# RUN NOW
case "$NODE_ENV" in
  production)   start_prod   ;;
           *)   start_dev    ;;
esac

