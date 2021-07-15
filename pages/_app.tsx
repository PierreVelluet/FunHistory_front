import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "antd/dist/antd.css";
// require("../styles/variables.less");
// import '../styles/variables.less'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
