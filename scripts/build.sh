#!/bin/bash

./scripts/clean
./node_modules/.bin/babel ./src --out-dir ./.srv
webpack --config ./config/webpack.config.js
