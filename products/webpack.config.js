const htmlWebpack = require('html-webpack-plugin');
const moduleFedderationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode:'development',
  devServer:{
    port:8081
  },
  plugins:[
    new moduleFedderationPlugin({
      name:'products',
      filename:'remoteEntry.js',
      exposes:{
        './ProductsIndex':'./src/index'
      },
      shared:['faker']
    }),
    new htmlWebpack({
      template:'./public/index.html'
    })
  ]
}