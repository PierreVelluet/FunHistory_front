import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";

import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  const withLayout = Component.withLayout ?? (page) => page;
  return ();
}
export default MyApp;


{/* <Layout>
<Component {...pageProps} />
</Layout> */}