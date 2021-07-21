module.exports = {
  reactStrictMode: true,
};
const withAntdLess = require("next-plugin-antd-less");


module.exports = {
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#C19434",
    "@secondary-color": "#34421E",
    "@thirdary-color"
  },
});
