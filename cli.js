#!/usr/bin/env node
global.nodeRequire = require;
global.engine = require('./engine');
global.packageJson = require('./package.json');
require('./bundle');
