#!/bin/bash

# DEFINE FUNCTIONS
link_packages(){
  ./node_modules/.bin/link-package ./config config
}

start_prod(){
  node ./.srv/index.js
}

start_dev(){
  ./node_modules/.bin/nodemon --exec ./node_modules/.bin/babel-node ./src/index.js & webpack-dev-server --config ./config/webpack.config.js
}


# RUN NOW
link_packages
case "$NODE_ENV" in
  production)   start_prod   ;;
           *)   start_dev    ;;
esac
