const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    }
}