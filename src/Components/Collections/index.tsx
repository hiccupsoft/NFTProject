import { Box, Button, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { NaveBar } from './NacBar';
import './styles.scss';
import { CollectionsList } from './NacBar'
import {Collection} from './Collection';

import BWhale from "../../assests/images/img-1.png";
import PWhale from "../../assests/images/img-2.png";
import UnknowWhale from "../../assests/images/img-unknown.png";
import _ from 'lodash';

export const Index: React.FC = () => {
    const [itmList, setItmList] = useState<any[]>([]);
    // const [itmListId, setItmListId] = useState(CollectionsList.None)

    useEffect(()=>{
        setItmList([BWhale, PWhale, BWhale, PWhale])
    }, [])

    const clickedListItem = (id:CollectionsList) => {
        // setItmListId(id)
        loadCollectionItems(id)
    }

    const loadCollectionItems = (id:CollectionsList) => {
        switch(id) {
            case CollectionsList.MyCollection:
                setItmList([BWhale, PWhale, BWhale, PWhale])
                break;
            case CollectionsList.Uncommen:
                setItmList([UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale,UnknowWhale, UnknowWhale, UnknowWhale, UnknowWhale])
                break;
            case CollectionsList.Rare:
                setItmList([]);
                break;
            case CollectionsList.Epic:
                setItmList([]);
                break;
            case CollectionsList.Legendary:
                setItmList([]);
                break;
            case CollectionsList.Crypto:
                setItmList([]);
                break;
            default:
                break;
        }
    }

    const renderCollectionContainer = () => {
        return <Grid container justifyContent="space-between">
            {
                _.map(itmList, (itm, key)=>{
                    return <Collection bgSrc={itm} key={key} />
                })
            }
        </Grid>
    }

    return (<Box className="sub_container">
        <NaveBar onClick={clickedListItem} />
        {/* {loadCollectionItems()} */}
        {renderCollectionContainer()}
    </Box>);
}