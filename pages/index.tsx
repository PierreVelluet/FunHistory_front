import React from 'react'

import Head from 'next/head'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { useGlobalContext } from 'utils/globalState/store'

import QuizzPanel from 'sections/QuizzPanel/QuizzPanel'
import GenericPickerPanel from 'sections/GenericPickerPanel/GenericPickerPanel'

import classes from './index.module.less'

export default function Home() {
    const { store }: any = useGlobalContext()

    const components: any = {
        QuizzPanel: <QuizzPanel />,
        Generic: <GenericPickerPanel key={store?.currentPanel} />,
    }

    console.log(store)

    return (
        <div className={classes.container}>
            <Head>
                <title>FunHistory</title>
                <meta name="FunHistory website" content="Geopolitic and history website" />
                <link rel="icon" href="/funHistoryLogo.png" />
                <style>{dom.css()}</style>
            </Head>
            {components[store?.currentPanel] || components['Generic']}
        </div>
    )
}
