/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { TextDecorator } from '../TextDecorator'
import { styled } from '@mui/material/styles';
import { Button, Grid } from '@mui/material';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import Mark from "../../assests/images/mark.png";
import ReactScroll, {Element, scroller} from "react-scroll";
import { useAppSelector } from '../../app/hooks';
import {
    getMode,
} from '../../actions/ToggleMode';

export const CustomButton = styled(Button)({
    background: '#16B4FF 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 22px #16B4FF48',
    borderRadius: '31px',
    lineHeight: '26px',
    fontFamily: 'Avenir Light',
    letterSpacing: '0.95px',
    width: '341px',
    height: '62px',
    color: '#FFFFFF',
    padding: '10px',
    "&:hover": {
        width: '365px',
        height: '66px',
        background: '#16B4FF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 33px #16B4FF',
        borderRadius: '39px',
        letterSpacing: '3.8px',
        transition: 'all 0.3s',
    }
});

// const Element = ReactScroll.Element;
// const scroller = ReactScroll.scroller;

export const Index: React.FC = () => {

    const navigate = useNavigate();
    const goTo = (url: string) => () => {
        navigate(url);
    }
    const isDark = useAppSelector(getMode);
    const mode = isDark?"dark":"light";
    const linkTo = () => {
        scroller.scrollTo('myScrollToElement', {
            duration: 1000,
            delay: 100,
          })
    }
    return (<div className={styles.main + " d-flex flex-column align-items-center justify-content-between"}>
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
        <CustomButton style={{ marginTop: '380px', fontSize: '15px' }} onClick={linkTo}>
            DIVE INTO THE DEEP
        </CustomButton>

        <img src={Mark} className={styles.markIcon} />

        <Element name="myScrollToElement">
            <div className={styles.collection}>
                <div className={styles.collection_title_first}>Mint your own</div>
                <div className={styles.collection_title_second}><b>CTYPTOWHALE</b></div>
            </div>
        </Element>
        <div style={{ width: '450px', marginTop: '45px' }}>
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
        <CustomButton style={{ marginTop: '55px', fontSize: '25px' }} onClick={goTo("/mint")}>
            MINT NOW
        </CustomButton>
    </div>);
}