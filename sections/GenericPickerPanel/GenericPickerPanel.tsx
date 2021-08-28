import React, { useState, useEffect } from 'react'

import PickableItem from './PickableItem/PickableItem'

import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces'
import staticData from 'utils/staticData'
import { useGlobalContext } from 'utils/globalState/store'
import { booleanArrayHandler, addIdHandler } from 'utils/functions/functions'
import { getAllCountriesByContinent } from 'utils/functions/fetchFunctions'

import classes from './GenericPickerPanel.module.less'

const GenericPickerPanel = () => {
    const { store, setLoading, setCurrentPanel, setContinent, setCountry, setTheme, setDifficulty }: any =
        useGlobalContext()

    const [items, setItems] = useState<PickableItemType[]>(staticData[store?.currentPanel])
    const boolArray: boolean[] = Array(items?.length || 3).fill(false)
    const [out, setOut] = useState<boolean[]>(boolArray)

    const updateState = (item: PickableItemType): void => {
        switch (store?.currentPanel) {
            case 'Continents':
                setContinent(item?.name)
                setTimeout(() => {
                    setCurrentPanel('Countries')
                }, 3000)
                break
            case 'Countries':
                setCountry(item?.name)
                setTimeout(() => {
                    setCurrentPanel('Themes')
                }, 3000)
                break
            case 'Themes':
                setTheme(item?.name)
                setTimeout(() => {
                    setCurrentPanel('Difficulties')
                }, 3000)
                break
            case 'Difficulties':
                setDifficulty(item)
                setTimeout(() => {
                    setCurrentPanel('QuizzPanel')
                }, 3000)
                break
            default:
                setTimeout(() => {
                    setCurrentPanel('Continents')
                }, 3000)
                break
        }
    }

    const selectItemHandler = (selectedItem: PickableItemType) => {
        const newOut: boolean[] = booleanArrayHandler(out, selectedItem?.id)
        setOut(newOut)
        updateState(selectedItem)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [store?.currentPanel])

    useEffect(() => {
        if (store?.currentPanel != 'Countries') return

        ;(async (): Promise<void> => {
            await getAllCountriesByContinent(store?.continent)
                .then((response: any) => response?.data?.data)
                .then((data: any) => addIdHandler(data))
                .then((data: any) => {
                    setItems(data)
                })
        })()
    }, [])

    return (
        <div className={classes.pickableItemsContainer}>
            {items?.map((el: PickableItemType, index: number) => {
                return <PickableItem key={el?.name} item={el} selectItemHandler={selectItemHandler} out={out[index]} />
            })}
        </div>
    )
}

export default GenericPickerPanel
