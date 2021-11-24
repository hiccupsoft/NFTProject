/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../assests/images/markIcon.png";
import Dark from "../../assests/images/Dark-toggle-icon.png";
import Light from "../../assests/images/Daylight-toggle.png";
import styles from './Topbar.module.scss';
import { TextDecorator } from '../TextDecorator'
import { Button, IconButton } from '@mui/material';

interface TobarProps{
    mode?: string;
} 

export const Topbar:React.FC<TobarProps> = (props:TobarProps) => {
    const navigate = useNavigate();
    const goTo = (url:string) => () => {
        navigate(url);
    }
    const mode = props.mode ? props.mode : "light";
    return (<div className="px-5 pt-4 d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <IconButton className="ms-3" onClick={goTo("/")} ><img src={Mark} width='50' /></IconButton>
        <TextDecorator className={styles.navText} onClick={goTo("/mint")} mode={mode} >
            Mint
        </TextDecorator>
        <TextDecorator className={styles.navText} onClick={goTo("/about")} mode={mode} >
            About
        </TextDecorator>
    </div>
    <div className="d-flex align-items-center">
        <IconButton className="mx-5" ><img src={mode==="light"?Dark:Light} /></IconButton>
        <Button className={styles.connectBtn + " px-4 py-2 ms-5"} ><TextDecorator mode={mode}>Connect wallet</TextDecorator></Button>
    </div>
</div>);
}