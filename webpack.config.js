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
    index: './src/index.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      utils: resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_module/,
        loader: 'swc-loader',
      },
    ],
  },
}
