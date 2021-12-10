/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-octal-escape */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { TextDecorator } from '../TextDecorator'
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/mark.png";
import {Element, scroller} from "react-scroll";
import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';
import Carousel from '../Carousel';
import { Collection, CollectionProps } from '../Collections/Collection';
import _ from 'lodash';
import BWhale from "../../../assests/images/whale1.png";
import PWhale from "../../../assests/images/whale2.png";
import UnknowWhale from "../../../assests/images/whale3.png";
import bg_light from "../../../assests/images/ocean-background.png";
import bg_dark from "../../../assests/images/ocean-background-dark.png";
import { CustomButton, DiveButton } from '../../CustomWidget';

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
        bgSrc: PWhale,
    },
    {
        title: "ETH Whale",
        isSold: true,
        soldPrice: '7.88 ETH',
        price: "10 BSC",
        bgSrc: UnknowWhale,
    },
];

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
        <div className={styles.bg + " d-flex flex-column align-items-center justify-content-between"}>
            <img src={!isDark ? bg_light : bg_dark} className={styles.bg_img} height="70%" />
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
            <DiveButton ismobile={"true"} style={{ marginTop: '60px', fontSize: '15px' }} onClick={linkTo}>
                DIVE INTO THE DEEP
            </DiveButton>
        </div>

        <img src={Mark} className={styles.markIcon} width="50%" />

        <Element name="myScrollToElement">
            <div className="d-flex flex-column align-items-center justify-content-center">
            <div className={styles.collection}>
                <div className={styles.collection_title_first}>THE </div>
                <span className={styles.collection_title_second}><b>COLLECTIONS</b></span>
            </div>

            <Carousel>
                {
                _.map(cloneData, (itm, key)=>{
                            return<Collection
                            bgSrc={itm.bgSrc} 
                            key={key}
                            price={itm.price}
                            title={itm.title}
                            isSold={itm.isSold}
                            hours={itm.hours}
                            min={itm.min}
                            sec={itm.sec}
                            soldPrice={itm.soldPrice}
                            style={{margin: '0 10px'}}
                        />
                })}

            </Carousel>
            <CustomButton ismobile={"true"} transparent={"true"} style={{ marginTop: 67, marginBottom: 150, font: 'normal normal medium 13px/18px Avenir', width: '220px !important', textTransform: 'none' }} onClick={goTo("/")}>
                Discover the whole Collection
            </CustomButton>
            </div>                             
        </Element>
    </div>);
}