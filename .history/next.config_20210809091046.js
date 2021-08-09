module.exports = {
  reactStrictMode: true,
};
const withAntdLess = require("next-plugin-antd-less");


module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND
};

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#C19434",
    "@secondary-color": "#34421E",
    "@thirdary-color": "#F1F1EF"
  },
});
