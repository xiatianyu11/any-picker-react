const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,  
            include: /node_modules/,  
            loaders: ['style-loader', 'css-loader'],
          }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         $:"jquery",
         jQuery:"jquery",
         "window.jQuery":"jquery",
         template: './index.html'
      })
   ]
}