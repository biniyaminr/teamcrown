module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/teamcrawn/'
  : '/',
  transpileDependencies: ["vuetify"]
};
