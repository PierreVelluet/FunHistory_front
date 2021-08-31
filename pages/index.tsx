import React from 'react';

import Head from 'next/head';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import QuizzPanel from 'sections/QuizzPanel/QuizzPanel';
import GenericPickerPanel from 'sections/GenericPickerPanel/GenericPickerPanel';

import { panelName, useRecoilValue } from '../recoil/panelState';

import classes from './index.module.less';

export default function Home() {
    const panel = useRecoilValue(panelName);

    const components: any = {
        QuizzPanel: <QuizzPanel />,
        Generic: <GenericPickerPanel key={panel} />,
    };

    return (
        <div className={classes.container}>
            <Head>
                <title>FunHistory</title>
                <meta name="FunHistory website" content="Geopolitic and history website" />
                <link rel="icon" href="/world.png" />
                <style>{dom.css()}</style>
            </Head>
            {components[panel] || components['Generic']}
        </div>
    );
}
