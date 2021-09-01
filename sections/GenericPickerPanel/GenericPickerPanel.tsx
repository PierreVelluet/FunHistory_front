import React, { useState, useEffect } from 'react';

import PickableItem from './PickableItem/PickableItem';

import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces';
import staticData from 'utils/staticData';
import { booleanArrayHandler, addIdHandler } from 'utils/functions/functions';
import { getAllCountriesByContinent } from 'utils/functions/fetchFunctions';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { settingsStateSelector } from 'recoil/settingsState';

import classes from './GenericPickerPanel.module.less';
import { ISettings } from 'typescript/interfaces/general_interfaces';

const GenericPickerPanel = () => {

    const [loading, setLoading] = useRecoilState<boolean>(loadingState);
    const [settings, setSettings] = useRecoilState<any>(settingsStateSelector);

    const [items, setItems] = useState<PickableItemType[]>(staticData[settings?.panel]);
    const boolArray: boolean[] = Array(items?.length || 3).fill(false);
    const [out, setOut] = useState<boolean[]>(boolArray);

    console.log(settings);

    const selectItemHandler = (selectedItem: PickableItemType) => {
        const newOut: boolean[] = booleanArrayHandler(out, selectedItem?.id);
        setOut(newOut);
        setTimeout(() => {
            setSettings(selectedItem?.name);
        }, 3000);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log('ok')
        }, 3000);
    }, [settings?.panel]);

    useEffect(() => {
        if (settings?.panel != 'Countries') return;
        (async (): Promise<void> => {
            await getAllCountriesByContinent(settings?.continents)
                .then((response: any) => response?.data?.data)
                .then((data: any) => addIdHandler(data))
                .then((data: any) => {
                    setItems(data);
                });
        })();
    }, []);

    return (
        <div className={classes.pickableItemsContainer}>
            {items?.map((el: PickableItemType, index: number) => {
                return <PickableItem key={el?.name} item={el} selectItemHandler={selectItemHandler} out={out[index]} />;
            })}
        </div>
    );
};

export default GenericPickerPanel;
