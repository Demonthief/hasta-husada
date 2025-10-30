module.exports = {
    chainWebpack: config => {
      config.module
        .rule('images')
        .test(/\.(jpg|jpeg|png|gif|svg)$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[name].[hash:8].[ext]',
          outputPath: 'assets/images/',
        });
    },
    publicPath: "/hasta-husada/"
  };
  