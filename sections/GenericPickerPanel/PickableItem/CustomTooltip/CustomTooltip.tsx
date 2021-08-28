import React, { useState, useEffect } from 'react'

import { Button } from 'antd'

import InformationItems from './InformationsItem/InformationsItem'

import { useGlobalContext } from 'utils/globalState/store'
import animations from 'utils/animations'

import classes from './CustomTooltip.module.less'
import cx from 'classnames'

const CustomTooltip = (props: any) => {
    const { country, innerOnClickHandler }: { country: any; innerOnClickHandler: any } = props
    const { store }: any = useGlobalContext()

    const [buttonVisibility, setButtonVisibility] = useState<boolean>(false)
    const [countryInformations, setCountryInformations] = useState<string[][]>([])
    const actualInformations: string[][] = Object.entries(country)

    let sortCountryInformations = (): void => {
        const desiredInformations: string[] = [
            'name',
            'native country name',
            'capital',
            'language',
            'government',
            'leader',
            'area',
            'population',
            'density',
            'gross domestic product per capita',
            'timezone',
            'establishment',
            'greeting',
        ]
        const result: string[][] = []
        desiredInformations.map((desiredString: string) => {
            actualInformations?.forEach((allInfoElement: string[]) => {
                if (desiredString === allInfoElement?.[0]) result.push(allInfoElement)
            })
        })
        setCountryInformations(result)
    }

    useEffect(() => {
        sortCountryInformations()
        const timeout = actualInformations?.length * 200
        setTimeout(() => {
            setButtonVisibility(true)
        }, timeout)
    }, [])

    return (
        <div className={cx(classes.container)}>
            {countryInformations.map((el: string[], index: number) => {
                return <InformationItems toolTipPlacement={'left'} key={el?.[0]} infos={el} index={index} />
            })}
            <div className={classes.btnContainer}>
                {buttonVisibility ? (
                    <Button
                        onClick={!store?.loading ? innerOnClickHandler : () => {}}
                        type="primary"
                        className={cx(classes.btn, animations?.fadeIn)}
                    >
                        {`Test your knowledge !`}
                    </Button>
                ) : null}
            </div>
        </div>
    )
}

export default CustomTooltip
