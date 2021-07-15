module.exports = {
  reactStrictMode: true,
};
const withAntdLess = require("next-plugin-antd-less");

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#FF4838",
    "@secondary-color": "#162B32",
  },
  // lessVarsFilePath: "./styles/variables.less",
});
