module.exports = {
  entry: './out/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'tinylib',
  },
};
