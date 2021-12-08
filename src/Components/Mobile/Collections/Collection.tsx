import { Box } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import { Label, GetItButton, ItemTitle } from '../../CustomWidget';
import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export interface CollectionProps {
    bgSrc?: any;
    style?: any;
    title: string;
    isSold?: boolean;
    hours?: number;
    min?: number;
    sec?: number;
    price: string;
    soldPrice?: string;
    cell?: number;
}

export const BgImg = (props: any) => {
    const BgImg = props.bgSrc;
    return BgImg ?  <img className={styles.fron_side} src={BgImg} width="100%" height="100%" style={props.style} /> : <Box className="flip_side" style={props.style} />
}

export const Collection: React.FC<CollectionProps> = (props:CollectionProps) => {

    const isDark = useAppSelector(getMode);
    const renderInfoPage = () => {
        if(props.isSold) {
            return (<Box className={props.cell === 2 ? 'my-2':'my-4'} style={{marginRight: 'auto'}}>
                <Box className={styles.sub_title_font} style={isDark?{color: 'white'}:{}}>Auction ended</Box>
                {/* <Box className={styles.main_info_font} style={isDark?{color: 'white'}:{}}>Sold for {props.soldPrice}</Box> */}
                <table width="100%">
                    <tr>
                        <td className={props.cell === 2 ? styles.main_info_font2 : styles.main_info_font} style={isDark?{color: 'white'}:{}}>Sold for {props.soldPrice}</td>
                    </tr>
                    <tr>
                        <td ></td>
                    </tr>
                </table>
            </Box>)
        } else {
            return (<Box className={props.cell === 2 ? '':'my-1'} style={{marginRight: 'auto'}}>
                <Box className={props.cell === 2 ? styles.sub_title_font : styles.sub_title_font2} style={isDark?{color: 'white'}:{}}>Auction ending in</Box>
                <table width="60%">
                    <tr>
                        <td className={props.cell === 2 ? styles.main_info_font2 : styles.main_info_font} style={isDark?{color: 'white'}:{}}>{props.hours}</td>
                        <td className={props.cell === 2 ? styles.main_info_font2 : styles.main_info_font} style={isDark?{color: 'white'}:{}}>{props.min}</td>
                        <td className={props.cell === 2 ? styles.main_info_font2 : styles.main_info_font} style={isDark?{color: 'white'}:{}}>{props.sec}</td>
                    </tr>
                    <tr>
                        <td className={props.cell === 2 ? styles.time_font2 : styles.time_font}>Hours</td>
                        <td className={props.cell === 2 ? styles.time_font2 : styles.time_font} >Min</td>
                        <td className={props.cell === 2 ? styles.time_font2 : styles.time_font}>Sec</td>
                    </tr>
                </table>
            </Box>)
        }
    }

    return (<Box className={(!isDark?styles.collection_itm_container:styles.collection_itm_container_dark) + " my-4 d-flex flex-column justify-content-center align-items-center h-full"} style={props.style}>
        <ItemTitle isDark={isDark} cell={props.cell} >{props.title}</ItemTitle>
        <BgImg className={props.cell === 2 ? 'my-1':'my-2'} bgSrc={props.bgSrc} style={{position: 'relative'}}/>
        <Label cell={props.cell}>{props.price}</Label>
         {renderInfoPage()}
         <GetItButton cell={props.cell} isDark={isDark}>GET IT NOW</GetItButton>
    </Box>);
}