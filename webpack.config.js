module.exports = {
  target: process.env.WEBPACK_TARGET,
  entry: './index.js',
  output: {
    filename: './index.' + process.env.WEBPACK_TARGET + '.bundle.js',
    libraryTarget: 'commonjs',
    path: __dirname
  }
};