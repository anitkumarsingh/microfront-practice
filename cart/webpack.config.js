const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports ={
  mode:'development',
  devServer:{
    port:8082
  },
  plugins:[
    new ModuleFederationPlugin({
      name:'cart',
      filename:'cartEntry.js',
      exposes:{
        './showCart':'./src/index.js'
      },
      shared:['faker']
    }),
    new htmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}