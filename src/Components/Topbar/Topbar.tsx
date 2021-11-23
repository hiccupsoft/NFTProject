/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../assests/images/markIcon.png";
import Dark from "../../assests/images/Dark-toggle-icon.png";
import Light from "../../assests/images/Daylight-toggle.png";
import styles from './Topbar.module.scss';
import { TextDecorator } from '../TextDecorator'
import { Button, IconButton } from '@mui/material';

export const Topbar:React.FC = () => {
    const navigate = useNavigate();
    const goTo = (url:string) => () => {
        navigate(url);
    }
    const mode = "light";
    return (<div className="mx-5 mt-4 d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <IconButton className="ms-3" onClick={goTo("/")} ><img src={Mark} /></IconButton>
        <TextDecorator className={styles.navText} onClick={goTo("/collection")} mode={mode} >
            Collections
        </TextDecorator>
        <TextDecorator className={styles.navText} onClick={goTo("/about")} mode={mode} >
            About
        </TextDecorator>
    </div>
    <div className="d-flex align-items-center">
        <IconButton className="mr-4" ><img src={mode==="light"?Dark:Light} /></IconButton>
        <Button className={styles.connectBtn + " px-4 py-2"} ><TextDecorator mode={mode}>Connect wallet</TextDecorator></Button>
    </div>
</div>);
}