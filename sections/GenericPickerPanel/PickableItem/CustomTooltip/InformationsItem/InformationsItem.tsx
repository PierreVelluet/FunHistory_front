import React, { useState, useEffect } from 'react'
import Typist from 'react-typist'

import { Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFlag,
    faFistRaised,
    faCity,
    faLanguage,
    faLandmark,
    faChartArea,
    faUsers,
    faClock,
    faHandshake,
    faHistory,
    faSignature,
    faLayerGroup,
    faCoins,
} from '@fortawesome/free-solid-svg-icons'

import animations from 'utils/animations'

import { capitalize } from 'utils/functions/functions'

import cx from 'classnames'
import classes from './InformationsItem.module.less'

const InformationItems = (props: any) => {
    const { infos, index }: { infos: string[]; index: number } = props
    const { toolTipPlacement } = props

    const [style, setStyle] = useState('')
    let unit = ''

    const iconChooser: any = (label: string) => {
        switch (label) {
            case 'name':
                return <FontAwesomeIcon icon={faFlag} className={classes.icon} />
            case 'leader':
                return <FontAwesomeIcon icon={faFistRaised} className={classes.icon} />
            case 'capital':
                return <FontAwesomeIcon icon={faCity} className={classes.icon} />
            case 'language':
                return <FontAwesomeIcon icon={faLanguage} className={classes.icon} />
            case 'government':
                return <FontAwesomeIcon icon={faLandmark} className={classes.icon} />
            case 'area':
                unit = ' km²'
                return <FontAwesomeIcon icon={faChartArea} className={classes.icon} />
            case 'population':
                unit = ' people'
                return <FontAwesomeIcon icon={faUsers} className={classes.icon} />
            case 'timezone':
                return <FontAwesomeIcon icon={faClock} className={classes.icon} />
            case 'density':
                unit = ' people / km²'
                return <FontAwesomeIcon icon={faLayerGroup} className={classes.icon} />
            case 'greeting':
                return <FontAwesomeIcon icon={faHandshake} className={classes.icon} />
            case 'gross domestic product per capita':
                unit = ' $'
                return <FontAwesomeIcon icon={faCoins} className={classes.icon} />
            case 'establishment':
                return <FontAwesomeIcon icon={faHistory} className={classes.icon} />
            case 'native country name':
                return <FontAwesomeIcon icon={faSignature} className={classes.icon} />
            default:
                return <FontAwesomeIcon icon={faClock} className={classes.icon} />
        }
    }

  

    useEffect(() => {
        setTimeout(() => {
            setStyle(animations.fadeIn)
        }, index * 300)
    }, [])

    return (
        <div className={cx(classes.infoItem)}>
            {style != '' ? (
                <>
                    <Tooltip
                        title={capitalize(infos?.[0])}
                        placement={toolTipPlacement}
                        color={'#045daf'}
                        key={infos?.[0]}
                    >
                        <div className={cx(classes.iconContainer, style)}>{iconChooser(infos[0])}</div>
                    </Tooltip>
                    <Typist cursor={{ show: false }} key={index}>
                        <p>{`${capitalize(infos?.[1])}${unit}`}</p>
                    </Typist>
                </>
            ) : null}
        </div>
    )
}

export default InformationItems
