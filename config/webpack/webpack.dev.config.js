const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// Will automagically inject the output file 'bundle.js' into the index.html
const configureHTMLWebpackPlugin = () => {
  return new HTMLWebpackPlugin({
    template: path.join(__dirname, '../../src/index.html'),
    filename: 'index.html',
    inject: 'body',
  });
}

// The actual webpack configuration object
module.exports = {
  // Turns on source maps so we can get real line numbers when errors occcur!
  devtool: 'inline-source-map',
  // Defines where webpack start to load
  entry: [
    // React Hot Loaders patch ( only for dev )
    'react-hot-loader/patch',
    // Path to the apps entrypoint
    path.resolve(__dirname, '../../src/index.js'),
  ],
  // Defines where webpack will output the bundled file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../src'),
    publicPath: '/'
  },
  // Configuration for the webpack dev server ( only for dev )
  devServer: {
    contentBase: './src',
    port: 4000,
    historyApiFallback: true
  },
  /**
   *
   * Loaders enable webpack to process more than just JavaScript files
   * (webpack itself only understands JavaScript). They give you the ability to
   * leverage webpack's bundling capabilities for all kinds of files by
   * converting them to valid modules that webpack can process.
   *
   * Essentially, webpack loaders transform all types of files into modules
   * that can be included in your application's dependency graph.
   */
  module: {
    rules: [
      // Uses babel to transpile JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Allows you to import scss files and also adds unique hash to avoid naming conflicts
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader'],
      },
      // Allows you to import images and stuff
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.png($|\?)|\.jpg($|\?)/,
        loader: 'url-loader',
      },

    ]
  },
  // Webpack plugins
  plugins: [
    // This is where we call the plugin we defined above
    configureHTMLWebpackPlugin()
  ]
};
