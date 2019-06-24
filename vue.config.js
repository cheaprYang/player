const path = require('path');
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  filenameHashing: false,
  pages: {
    index: {
      entry: './src/index.js',
      template: 'demo/index.html'
    }
  },
  configureWebpack: config => {
    // if (process.env.NODE_ENV === "production") {
    //   config.bail = true;
    //   config.entry = {
    //     Player: "./src/index.js"
    //   };
    //   config.output = {
    //     path: path.resolve(__dirname, "./dist"),
    //     filename: "[name].min.js",
    //     library: "[name]",
    //     libraryTarget: "umd",
    //     libraryExport: "default",
    //     umdNamedDefine: true,
    //     publicPath: "/"
    //   };
    //    delete config.optimization;
    // }
  },

  chainWebpack: config => {
    config.module
    .rule('handlebars')
    .test(/\.hbs$/)
    .use('handlebars-loader')
    .loader('handlebars-loader')
    .end();
    config.module.rule('svg').uses.clear();

    config.module
    .rule('svg')
    .test(/\.(svg)(\?.*)?$/)
    .use('raw-loader')
    .loader('raw-loader')
    .end();

    config.plugins.delete('prefetch');
    config.plugins.delete('preload');


  },

  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '..', 'demo'),
    clientLogLevel: 'none',
    quiet: false,
    open: true,
    historyApiFallback: {
      disableDotRule: true
    },
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
