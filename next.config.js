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
    "@primary-color": "#045daf",
    "@secondary-color": "#02284b",
    "@thirdary-color": "#40a9ff"
  },
});
