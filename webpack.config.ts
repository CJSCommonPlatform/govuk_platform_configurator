var webpack = require('webpack');
var path = require('path');
var resolveNgRoute = require('@angularclass/resolve-angular-routes');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var commonConfig = {
  entry: {
    'ng2-translate': './node_modules/ng2-translate/bundles/ng2-translate.js'
  },  
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'raw-loader' },
      { test: /\.scss$/, loaders: ['raw', 'sass']},
      {test: /\.(jpg|jpeg|gif|png)$/, loader: 'url?limit=1024&name=govuk/images/[name].[ext]'},
      {test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=1024&name=govuk/stylesheets/fonts/images/[name].[ext]'}
    ]
  },
  sassLoader: {
    includePaths: [
      'node_modules/govuk-elements-sass/public/sass'
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('./src'),
      resolveNgRoute(root('./src'))
    ),
    new CopyWebpackPlugin([
      {
        context: './',
        from: 'i18n/**'
      }
    ]),
    
  ]
};


var clientConfig = {
  target: 'web',
  entry: './src/client',
  output: {
    path: root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: './src',
        from: 'govuk/images/**'
      },
      {
        context: './src',
        from: 'govuk/stylesheets/**'
      }
    ])
  ]
};


var serverConfig = {
  target: 'node',
  entry: './src/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};



// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'server.js',
    devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  devtool: '#source-map'
};



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
