import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";

import { Store } from "../utils/globalState/store";
import {
  RecoilRoot
} from 'recoil';


import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <RecoilRoot>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
      </RecoilRoot>
    </Store>
  );
}
export default MyApp;
