const path = require('path');

const resolvePath = relPath => path.resolve(__dirname, relPath);

const entryFile = resolvePath('./src/App.jsx');
const outputDir = resolvePath('../webapp/hello_react/hello/static/');

const bundleName = 'js/[name].js';
const imgName = 'img/[name].[ext]';

module.exports = {
  entry: {hello_react: entryFile},
  output: {
    path: outputDir,
    filename: bundleName,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: imgName,
              publicPath: '/static',
            },
          },
        ],
      },
    ],
  },
};
