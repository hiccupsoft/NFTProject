/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-octal-escape */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { TextDecorator } from '../TextDecorator'
import { Grid } from '@mui/material';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/mark.png";
import {Element, scroller} from "react-scroll";
import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';
import { Carousel } from '../Carousel';
import { Collection } from '../Collections/Collection';
import _ from 'lodash';
import BWhale from "../../../assests/images/whale1.png";
import PWhale from "../../../assests/images/whale2.png";
import UnknowWhale from "../../../assests/images/whale3.png";
// import bg_light from "../../../assests/images/ocean-background.png";
// import bg_dark from "../../../assests/images/ocean-background-dark.png";
import cloud from "../../../assests/images/cloud.png";
import { CustomButton, DiveButton } from '../../CustomWidget';

export const Index: React.FC = () => {

    const navigate = useNavigate();
    const goTo = (url: string) => () => {
        navigate(url);
    }
    const isDark = useAppSelector(getMode);
    const mode = isDark?"dark":"light";
    const linkTo = () => {
        scroller.scrollTo('myScrollToElement', {
            duration: 4000,
            delay: 10000,
          })
    }
    return (<div className={styles.main + " d-flex flex-column align-items-center justify-content-between"}>
        <div className={styles.bg + " d-flex flex-column align-items-center justify-content-between"}>
            {/* <img src={!isDark ? bg_light : bg_dark} className={styles.bg_img} height="100%" /> */}
            {!isDark && <img src={cloud} className={styles.bg_img} />}
            <div className={styles.title}>
                <div>
                    <TextDecorator className={styles.title_first} mode={mode} >DIGITAL </TextDecorator>
                    <TextDecorator className={styles.title_second} mode={mode}>CRYPTO WHALES</TextDecorator>
                </div>
                <div>
                    <TextDecorator className={styles.title_first} mode={mode}>FOR </TextDecorator>
                    <TextDecorator className={styles.title_second} mode={mode}>CRYPTO WHALES.</TextDecorator>
                </div>
            </div>
            <div className={styles.subtitle}>
                <TextDecorator mode={mode}> Only the wealthiest whales can afford the most high end, exclusive Whale NFT’s.</TextDecorator>
            </div>
            <DiveButton style={{ marginTop: '380px', fontSize: '15px' }} onClick={linkTo}>
                DIVE INTO THE DEEP
            </DiveButton>
        </div>

        <img src={Mark} className={styles.markIcon} width="50%" />

        <Element name="myScrollToElement">
            <div className={styles.collection}>
                <div className={styles.collection_title_first}>Mint your own</div>
                <div className={styles.collection_title_second}>CTYPTOWHALE</div>
            </div>
        </Element>
        <div style={{ width: '450px', marginTop: '45px', fontSize: 23, marginBottom: 50, fontFamily: 'Roboto', fontWeight: 100 }}>
            <Grid container className="justify-content-center">
                <Grid item xs={8}>
                    Whale species in the ocean:
                </Grid>
                <Grid item xs={3}>
                    10,000
                </Grid>
                <Grid item xs={8}>
                    Mint Fee:
                </Grid>
                <Grid item xs={3}>
                    0.01 ETH
                </Grid>
                <Grid item xs={8}>
                    Max items per Tx:
                </Grid>
                <Grid item xs={3}>
                    15
                </Grid>
            </Grid>
        </div>

     <Carousel className="mt-5">

         {
          _.map([BWhale, PWhale, BWhale, PWhale, UnknowWhale,BWhale, PWhale, UnknowWhale, UnknowWhale, UnknowWhale], (itm, key)=>{
                    return <Collection bgSrc={itm} key={key} hiddenBtn={true}></Collection>
        })}

     </Carousel>
        <CustomButton style={{ marginTop: 205, fontSize: '25px', marginBottom: 513 }} onClick={goTo("/mint")}>
            MINT NOW
        </CustomButton>
    </div>);
}