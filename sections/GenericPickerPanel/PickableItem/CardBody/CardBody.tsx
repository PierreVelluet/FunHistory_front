import React from 'react';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { PickableItemType } from 'typescript/interfaces/pickableItems_interfaces';

import WrappingTooltip from './WrappingTooltip/WrappingTooltip';

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { settingsStateSelector } from 'recoil/settingsState';

import classes from './CardBody.module.less';

const CardBody = (props: any) => {
    const {
        item,
        innerOnClickHandler,
    }: {
        item: PickableItemType;
        innerOnClickHandler: any;
    } = props;

    return (
        <>
            <WrappingTooltip item={item} innerOnClickHandler={innerOnClickHandler}>
                <Image
                    src={item?.bgImage ?? '/placeholder.png'}
                    layout="fill"
                    objectFit="cover"
                    alt={`${item?.name} picture`}
                    unoptimized={process.env.NODE_ENV === 'development'}
                />
            </WrappingTooltip>
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
    );
};

export default CardBody;
