import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "../styles/antd.less"
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
