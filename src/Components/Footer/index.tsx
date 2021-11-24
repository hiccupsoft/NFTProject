import React  from 'react';
import { CustomButton } from '../Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
import "./styles.scss";
import { ButtonGroup, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface FooterProps{
    showTitle?: boolean;
    showButton?: boolean;
    showIcons?: boolean;
    children?: any;
}

export const Index:React.FC<FooterProps> = (props: FooterProps) => {
    const navigate = useNavigate();
    const goTo = (url:string) => () => {
        navigate(url);
    }
    return (
        <div className="footer d-flex flex-column align-items-center justify-content-between" >
            {props.children}
            {props.showTitle && <div className="title" style={{maxWidth:"730px"}}>
                When you join one of our social you get access to our community. You will receive updates about new NFT auctions, general news about our projects and get the chance investors to buy and sell our NFT’s. Only whales can join after they purchased their first whale item.
            </div>}
            {props.showButton && <CustomButton style={{ marginTop: '80px', fontSize: '18px' }} endIcon={<ArrowForwardIcon />} >
                JOIN NOW
            </CustomButton>}
            {props.showIcons && <ButtonGroup style={{marginBottom: '100px',  marginTop: '110px'}}>
                <IconButton className="mx-4" ><a href="https://"><SailingRoundedIcon /></a></IconButton>
                <IconButton className="mx-4"><a href="https://"><i className="fas fa-paper-plane"></i></a></IconButton>
                <IconButton className="mx-4"><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></IconButton>
                <IconButton className="mx-4"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></IconButton>
                <IconButton className="mx-4"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></IconButton>
            </ButtonGroup>}
        </div>
    );
}