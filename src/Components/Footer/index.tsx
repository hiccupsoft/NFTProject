import React  from 'react';
import { CustomButton } from '../Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
import "./styles.scss";
import { ButtonGroup, IconButton, Box } from '@mui/material';
import Discord from "../../assests/images/Discord-icon.png";
import Facebook from "../../assests/images/FaceBook-icon.png";
import Insta from "../../assests/images/Insta-icon.png";
import Ship from "../../assests/images/Opensea-icon.png";
import Twitter from "../../assests/images/Twitter-cion.png";

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
                <IconButton className="mx-3"><a href="https://"><img src={Discord} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://"><img src={Discord} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://twitter.com/"><img src={Twitter} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://www.facebook.com/"><img src={Facebook} /></a></IconButton>
                <IconButton className="mx-3"><a href="https://www.instagram.com/"><img src={Insta} /></a></IconButton>
            </ButtonGroup>}
            <Box className="mb-5" >©2021 CryptoWhales</Box>
        </div>
    );
}