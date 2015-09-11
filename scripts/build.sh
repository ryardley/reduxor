#!/bin/bash

./scripts/clean
./node_modules/.bin/babel ./app --out-dir ./.srv
webpack
