const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

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
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'swc-loader',
        options: {
          jsc: {
            target: 'es2015',
          },
        },
      },
    ],
  },
}
