module.exports = {
  reactStrictMode: true,
}
const withAntdLess = require('next-plugin-antd-less');

module.exports = {
  NODE_ENV: process.env.NODE_ENV
}

module.exports = withAntdLess({
  // optional
  modifyVars: { '@primary-color': '#04f' },
  // optional
  lessVarsFilePath: './styles/antd.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  }
});