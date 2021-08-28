import React, { useState } from 'react'

import { Card } from 'antd'

import CardBody from './CardBody/CardBody'

import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces'
import { useGlobalContext } from 'utils/globalState/store'
import animations from 'utils/animations'

import classes from './PickableItem.module.less'
import cx from 'classnames'

const PickableItem = (props: any) => {
    const {
        item,
        selectItemHandler,
        out,
    }: {
        item: PickableItemType
        selectItemHandler: any
        out: boolean
    } = props

    const { store, setLoading }: any = useGlobalContext()

    const [selected, setSelected] = useState(false)
    const itemId = item?.id

    const innerStyle = {
        container: [
            classes.cardContainer,
            {
                [animations.attention]: selected,
                [classes.loadingState]: store?.loading,
                [`${animations.fadeOutDown} ${animations.delay2}`]: out,
            },
        ],
        subcontainer: [
            classes.subcontainer,
            {
                // @ts-ignore
                [`${animations.outDown} ${animations.delay4}`]: selected,
            },
        ],
        cardTitle: [
            classes.cardTitle,
            // @ts-ignore
            ` ${animations.fadeInDown} ${animations[`delay${itemId}`]}`,
        ],
        card: [
            classes.pickableItem,
            // @ts-ignore
            `${animations.inDown} ${animations[`delay${itemId - 1}`]}`,
            {
                [classes.countryType]: store?.currentPanel === 'Countries',
                [classes.unselectedPickableItem]: out,
                [classes.selectedPickableItem]: selected,
                [classes.unactivePickableItem]: item?.inactive,
            },
        ],
    }

    const innerOnClickHandler = () => {
        if (store?.loading || item?.inactive) return
        setLoading(true)
        setSelected(true)
        selectItemHandler(item)
    }

    return (
        <div
            onClick={store?.currentPanel != 'Countries' ? innerOnClickHandler : () => {}}
            className={cx(...innerStyle.container)}
        >
            <div className={cx(...innerStyle.subcontainer)}>
                <p className={cx(...innerStyle.cardTitle)}>{item?.name}</p>
                <Card className={cx(...innerStyle.card)}>
                    <CardBody item={item} innerOnClickHandler={innerOnClickHandler} />
                </Card>
            </div>
        </div>
    )
}

export default PickableItem
