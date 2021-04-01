var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        include: path.join(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          }
        ]
      },
      {
        test: /.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ],
      }
    ]
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //       }, {
  //         test: /\.css$/,
  //         loader: "style-loader!css-loader"
  //       }, {
  //         test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
  //         loader: 'url-loader?limit=100000'
  //     }
  //     },
  //   ],
  // },
};
