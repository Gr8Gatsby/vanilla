
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
   // ...your other settings here

  chainWebpack: config => {
      // ...your other webpack config overrides here

    if (process.env.NODE_ENV === "production")
        config.plugin("webpack-report")
            .use(BundleAnalyzerPlugin, [{
                // ...webpack-bundle-analyzer options here
            }]);
  }
};
