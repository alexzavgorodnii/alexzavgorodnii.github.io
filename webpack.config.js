var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app.js', './scss/main.scss', './css/plain_css.css'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
