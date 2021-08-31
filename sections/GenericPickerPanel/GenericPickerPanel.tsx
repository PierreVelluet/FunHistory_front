import React, { useState, useEffect } from 'react';

import PickableItem from './PickableItem/PickableItem';

import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces';
import staticData from 'utils/staticData';
import { useGlobalContext } from 'utils/globalState/store';
import { booleanArrayHandler, addIdHandler } from 'utils/functions/functions';
import { getAllCountriesByContinent } from 'utils/functions/fetchFunctions';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { panelName } from 'recoil/panelState';
import { settingsStateSelector } from 'recoil/settingsState';

import classes from './GenericPickerPanel.module.less';

const GenericPickerPanel = () => {
    const { store, setContinent, setCountry, setTheme, setDifficulty }: any = useGlobalContext();

    const [loading, setLoading] = useRecoilState<boolean>(loadingState);
    const [panel, setPanel] = useRecoilState<string>(panelName);
    const [settings, setSettings] = useRecoilState(settingsStateSelector);

    const [items, setItems] = useState<PickableItemType[]>(staticData[panel]);
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
    }, [panel]);

    useEffect(() => {
        if (panel != 'Countries') return;
        (async (): Promise<void> => {
            await getAllCountriesByContinent(store?.continent)
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
