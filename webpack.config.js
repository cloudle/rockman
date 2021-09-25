const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

// const tsLoader = { test: /\.(ts|js)$/, loader: 'ts-loader' }
const swcLoader = {
  test: /\.(ts|js)$/,
  loader: 'swc-loader',
  options: {
    jsc: {
      target: 'es2015',
    },
  },
};

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  externalsPresets: {
    node: true,
  },
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: resolve(__dirname),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      commands: resolve(__dirname, 'src/commands'),
      middlewares: resolve(__dirname, 'src/middlewares'),
      utils: resolve(__dirname, 'src/utils'),
      types: resolve(__dirname, 'src/types'),
    },
  },
  module: {
    rules: [swcLoader],
  },
};
