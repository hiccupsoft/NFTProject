import { Box } from '@mui/material';
import React from 'react';
import './styles.scss';
import CustomAnimButton from "../CustomAnimButton"

export interface CollectionProps {
    bgSrc?: any;
    hiddenBtn?: boolean
}

export const BgImg = (props: any) => {
    const BgImg = props.bgSrc;
    console.log(BgImg)
    return BgImg ?  <img className="fron_side" src={BgImg} /> : <Box className="flip_side" />
}

export const Collection: React.FC<CollectionProps> = (props:CollectionProps) => {

    return (<Box className="collection_itm_container d-flex flex-column align-items-center p-1 my-4">
        <BgImg bgSrc={props.bgSrc} />
        {!props.hiddenBtn && <Box className="w-100 text-center">
            <CustomAnimButton dark={true}> Get it on Opensea </CustomAnimButton>
        </Box>}
    </Box>);
}