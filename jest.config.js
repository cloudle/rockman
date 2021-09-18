const swcConfig = {
  module: {
    type: 'commonjs',
  },
}

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfig],
  },
}
