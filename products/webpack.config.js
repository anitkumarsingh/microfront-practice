const htmlWebpack = require('html-webpack-plugin');
module.exports = {
  mode:'development',
  devServer:{
    port:8081
  },
  plugins:[
    new htmlWebpack({
      template:'./public/index.html'
    })
  ]
}