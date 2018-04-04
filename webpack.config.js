const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

const htmlPluginObj = new HtmlPlugin({
  template: path.join(__dirname, './src/index.html'), 
  filename: 'index.html' 
})


module.exports = {
  entry: path.join(__dirname, './src/main.js'), 
  output: {
    path: path.join(__dirname, './dist'), 
    filename: 'bundle.js'
  }, 
  plugins: [
    htmlPluginObj
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader?name=[hash:8]-[name].[ext]' },
      { test: /\.ttf|eot|woff|woff2|svg$/, use: 'url-loader' }, 
      { test: /\.js$/, use: 'babel-loader',exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
    
  }
}
