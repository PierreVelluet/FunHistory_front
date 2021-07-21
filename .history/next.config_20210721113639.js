module.exports = {
  reactStrictMode: true,
};
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#C19434",
    "@secondary-color": "#34421E",
  },
});
