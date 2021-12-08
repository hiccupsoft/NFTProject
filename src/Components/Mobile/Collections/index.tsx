import { Box, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { NaveBar } from './NavBar';
import styles from './styles.module.scss';
import { CollectionsList } from './NavBar'
import {Collection, CollectionProps} from './Collection';

import BWhale from "../../../assests/images/img-1.png";
import PWhale from "../../../assests/images/img-2.png";
import UnknowWhale from "../../../assests/images/img-unknown.png";
import sqare from "../../../assests/images/square.png";
import quawts from "../../../assests/images/squares.png";
import _ from 'lodash';

interface CollectionsProps {
    selConllectionItem?: (id:CollectionsList)=>void;
}

const cloneData:CollectionProps[] = [
    {
        title: "BTC Whale",
        hours: 6,
        min: 34,
        sec: 9,
        price: "10 BSC",
        bgSrc: BWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: BWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: BWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: BWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: BWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: BWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: BWhale,
    },

];
export const Index: React.FC<CollectionsProps> = (props:CollectionsProps) => {
    const [itmList, setItmList] = useState<CollectionProps[]>([]);
    const [itmListId, setItmListId] = useState(CollectionsList.All)
    const [grid, setGrid] = useState(1)

    useEffect(()=>{
        setItmList(cloneData)
    }, [])

    const clickedListItem = (id:CollectionsList) => {
        setItmListId(id)
        loadCollectionItems(id);
        props.selConllectionItem && props.selConllectionItem(id);
    }

    const loadCollectionItems = (id:CollectionsList) => {
        switch(id) {
            case CollectionsList.All:
                setItmList(cloneData)
                break;
            case CollectionsList.CryptoWhales:
                setItmList([])
                break;
            case CollectionsList.WhackyWhales:
                setItmList([]);
                break;
            case CollectionsList.FamousWhales:
                setItmList([]);
                break;
            default:
                break;
        }
    }

    const renderCollectionContainer = () => {
        return <Grid container className={"px-4"} style={grid === 2 ? {}: {marginLeft: '50%', transform: 'translateX(-50%)'}}>
            {
                _.map(itmList, (itm, key)=>{
                    return <Grid item xs={12 /grid}>
                        <Collection
                            bgSrc={itm.bgSrc} 
                            key={key}
                            price={itm.price}
                            title={itm.title}
                            isSold={itm.isSold}
                            hours={itm.hours}
                            min={itm.min}
                            sec={itm.sec}
                            soldPrice={itm.soldPrice}
                            cell={grid}
                            style={grid === 2 ? {width: 185, height: 358} : {width: 355, height: 505}}
                        />
                    </Grid>
                })
            }
        </Grid>
    }

    const renderSubTitle = () => {
        switch(itmListId) {
            case CollectionsList.All:
                return <span>All</span>;
            case CollectionsList.CryptoWhales:
                return <span>CryptoWhales</span>
            case CollectionsList.WhackyWhales:
                return <span>WhackyWhales</span>
            case CollectionsList.FamousWhales:
                return <span>FamousWhales</span>
            default:
                return null;
        }
    }

    return (<Box className={styles.sub_container}>
        <NaveBar onClick={clickedListItem} />
        <Box className={styles.modeBtn + " d-flex flex-row"}>
            <Box className={(grid===1 ? styles.modeBtnContainer_active : styles.modeBtnContainer) + " d-flex mx-2"} onClick={()=>setGrid(1)}><img src={sqare} /></Box>
            <Box className={(grid===2 ? styles.modeBtnContainer_active : styles.modeBtnContainer) + " d-flex mx-2"} onClick={()=>setGrid(2)}><img src={quawts} /></Box>
        </Box>
        <Box className={styles.subTitle + ' d-flex flex-row justify-content-start align-items-center'}>
            {renderSubTitle()}
        </Box>
        {/* {loadCollectionItems()} */}
        <Box className={"d-flex flex-row"} style={{marginTop: '50px'}}>
            {renderCollectionContainer()}
        </Box>
    </Box>);
}