const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.NODE_ENV == 'production';
const config = {
  entry: './src/index.ts',
  output: {
    filename: 'onesdk.js',
    library: {
      name: 'OneSDK',
      export: 'default',
      type: 'umd',
    },
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        ecma: undefined,
        parse: {},
        compress: {},
        mangle: false,
        module: false,
        output: null,
        format: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      },
    })],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
