import React from 'react'

import Image from 'next/image'
import { Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces'

import CustomTooltip from '../CustomTooltip/CustomTooltip'

import { useGlobalContext } from 'utils/globalState/store'

import classes from './CardBody.module.less'
import cx from "classnames";

const CardBody = (props: any) => {
    const {
        item,
        innerOnClickHandler,
    }: {
        item: PickableItemType
        innerOnClickHandler: any
    } = props

    const { store }: any = useGlobalContext()

    return (
        <>
            <Tooltip
                destroyTooltipOnHide
                key={store?.country}
                trigger="click"
                color="#181818"
                placement="right"
                title={
                    store?.currentPanel === 'Countries' ? (
                        <CustomTooltip country={item} innerOnClickHandler={innerOnClickHandler} arrowPointAtCenter />
                    ) : (
                        false
                    )
                }
            >
                <Image
                    src={item?.bgImage ?? '/placeholder.png'}
                    layout="fill"
                    objectFit="cover"
                    alt={`${item?.name} picture`}
                    unoptimized={process.env.NODE_ENV === 'development'}
                />
            </Tooltip>
            <div className={classes.unavailableText}>
                {item?.inactive ? (
                    <span className="me-2">
                        <FontAwesomeIcon icon={faLock} className="me-2" />
                        Locked
                    </span>
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default CardBody
