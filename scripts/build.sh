#!/bin/bash

./scripts/clean.sh
./node_modules/.bin/babel ./app --out-dir ./.srv
webpack
