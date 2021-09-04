import React from 'react';

import { Tooltip } from 'antd';

import CustomTooltip from '../../CustomTooltip/CustomTooltip';

import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces';

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { settingsStateSelector } from 'recoil/settingsState';

const WrappingTooltip = ({
    children,
    item,
    innerOnClickHandler,
}: {
    children: React.ReactNode;
    item: PickableItemType;
    innerOnClickHandler: any;
}) => {
    const [loading, setLoading] = useRecoilState<boolean>(loadingState);
    const [settings, setSettings] = useRecoilState<any>(settingsStateSelector);

    return (
        <Tooltip
            destroyTooltipOnHide
            key={settings?.country}
            trigger="click"
            color="#181818"
            placement="right"
            title={
                settings?.panel === 'countries' ? (
                    <CustomTooltip country={item} innerOnClickHandler={innerOnClickHandler} arrowPointAtCenter />
                ) : (
                    false
                )
            }
        >
            {children}
        </Tooltip>
    );
};

export default WrappingTooltip;
