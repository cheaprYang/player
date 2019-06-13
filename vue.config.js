const path = require("path");
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,

  pages: {
    index: {
      entry: "./src/index.js",
      template: "demo/index.html"
    }
  },

  configureWebpack: config => {
    // if (process.env.NODE_ENV === "production") {
    //   config.bail = true;
    //   config.entry = {
    //     Player: "./src/index.js"
    //   };
    //   config.output = {
    //     path: path.resolve(__dirname, "dist"),
    //     filename: "[name].min.js",
    //     library: "[name]",
    //     libraryTarget: "umd",
    //     libraryExport: "default",
    //     umdNamedDefine: true,
    //     publicPath: "/"
    //   };
    //   config.node = {
    //     dgram: "empty",
    //     fs: "empty",
    //     net: "empty",
    //     tls: "empty"
    //   };
    //   config.plugins = [];
    //   // delete config.optimization;
    // }
  },

  chainWebpack: config => {
    config.module
      .rule("handlebars")
      .test(/\.handlebars$/)
      .use("handlebars-loader")
      .loader("handlebars-loader")
      .end();
    config.module.rule("images").uses.clear();
    config.module.rule("media").uses.clear();
    config.module.rule("svg").uses.clear();

    config.module
      .rule("svg")
      .test(/\.(svg)(\?.*)?$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();

    config.module.rule("eslint").use("eslint-loader");
    config.plugins.delete("html");
    config.plugins.delete("prefetch-index");
    config.plugins.delete("preload");
    config.module.delete("vue");
    config.module.delete("media");
    config.module.delete("pug");
    config.module.delete("less");
    config.module.delete("stylus");
    config.resolve.alias.delete("vue");
  },

  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, "..", "demo"),
    clientLogLevel: "none",
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
