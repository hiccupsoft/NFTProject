/* eslint-disable jsx-a11y/alt-text */
import React  from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.scss";
import { ButtonGroup, IconButton, Box } from '@mui/material';
import Discord from "../../../assests/images/Discord-icon.png";
import Telegram from "../../../assests/images/telegram.png";
import Ship from "../../../assests/images/Opensea-icon.png";
import Twitter from "../../../assests/images/Twitter-cion.png";
import { CustomButton } from '../../CustomWidget';

interface FooterProps{
    showTitle?: boolean;
    showButton?: boolean;
    showIcons?: boolean;
    children?: any;
}

export const Index:React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <div className="footer d-flex flex-column align-items-center justify-content-between" >
            {props.children}
            {props.showTitle && <div className="title" style={{maxWidth:"730px"}}>
                When you join one of our social you get access to our community. You will receive updates about new NFT auctions, general news about our projects and get the chance investors to buy and sell our NFT’s. Only whales can join after they purchased their first whale item.
            </div>}
            {props.showButton && <CustomButton style={{ marginTop: '80px', fontSize: '18px' }} endIcon={<ArrowForwardIcon />} >
                JOIN NOW
            </CustomButton>}
            {props.showIcons && <ButtonGroup style={{marginBottom: '50px',  marginTop: '276px'}}>
                <IconButton className="mx-3" ><a href="https://"><img src={Ship} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://"><img src={Telegram} width="50" /></a></IconButton>
                <IconButton className="mx-3"><a href="https://"><img src={Discord} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://twitter.com/"><img src={Twitter} /></a></IconButton>
            </ButtonGroup>}
            <Box className="mb-5" >©2021 CryptoWhales</Box>
        </div>
    );
}