import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";

import "antd/dist/antd.css";
// require("../styles/variables.less");
// import '../styles/variables.less'
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
