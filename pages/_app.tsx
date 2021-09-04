import type { AppProps } from 'next/app';

import { RecoilRoot } from 'recoil';

import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            {/* <Layout> */}
            <Component {...pageProps} />
            {/* </Layout> */}
        </RecoilRoot>
    );
}
export default MyApp;
