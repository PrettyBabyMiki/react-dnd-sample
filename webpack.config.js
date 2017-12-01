const styleLoaderOptions = {
  modules: true,
  camelCase: true,
  localIdentName: '[name]__[local]___[hash:base64:5]',
  importLoaders: 1,
}


var config = {
   entry: './main.js',

   output: {
      path:'/',
      filename: './index.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [
         {
            test: /\.(jsx?|css?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loaders: [
            'style-loader',
            {
              loader: 'css-loader',
              options: styleLoaderOptions,
            }

          ],
         }
      ]
   }
}

module.exports = config;

// 'css-loader?modules&camelCase=dashes&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'
