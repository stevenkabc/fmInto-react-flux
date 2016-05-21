var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var CODE = __dirname+'/excercises';
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer =  require('react-dom/server')

makeIndex();

module.exports = {

  devtool: 'eval',

  entry: fs.readdirSync(CODE).reduce(function (entries, dir) {
    if (isDirectory(path.join(CODE, dir)))
      entries[dir] = path.join(CODE, dir, 'app.js');
      console.log(entries)
    return entries;
  }, {}),

  output: {
    path: 'excercises/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  stats: {
      colors: true,
      reasons: true
    },
    resolve: {
        alias: {

            // temporary fix for missing require in `react-ga`
            // cf. https://github.com/react-ga/react-ga/issues/53
            'react/lib/Object.assign': 'object-assign',

        },
    },

  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};

function makeIndex () {
  var list = fs.readdirSync(CODE).filter(function(dir) {
    return isDirectory(path.join(CODE, dir));
  }).map(function (dir) {
    return React.DOM.li({}, React.DOM.a({href: '/'+dir}, dir.replace(/-/g, ' ')));
  });
  var markup = ReactDOMServer.renderToStaticMarkup((
    React.DOM.html({},
      React.DOM.link({rel: 'stylesheet', href: '/shared.css'}),
      React.DOM.body({id: 'index'},
        React.DOM.ul({}, list)
      )
    )
  ));
  fs.writeFileSync('./dirTest.html', markup);
}

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}
