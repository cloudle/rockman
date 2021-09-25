#!/usr/bin/env node
global.nodeRequire = require;
global.packageJson = require('./package.json');
require('./bundle');
