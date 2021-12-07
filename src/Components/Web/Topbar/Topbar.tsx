/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/markIcon.png";
import Dark from "../../../assests/images/Dark-toggle-icon.png";
import Light from "../../../assests/images/Daylight-toggle.png";
import styles from './Topbar.module.scss';
import { TextDecorator } from '../TextDecorator'
import { Button, IconButton } from '@mui/material';
import {Routes} from "../../../Routes";
import _ from 'lodash'
import Popup from "../PopupModal/Popup"
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    setDark,
    getMode,
    setCurrentTitle,
    getCurrentTitle,
} from '../../../actions/ToggleMode';

interface TobarProps{
    mode?: string;
} 

export const Topbar:React.FC<TobarProps> = (props:TobarProps) => {
    const navigate = useNavigate();
    const isDark = useAppSelector(getMode);
    const dispatch = useAppDispatch();
    const goTo = (url:string, title: string) => () => {
        dispatch(setCurrentTitle(title));
        navigate(url);
    }
    const [openModal, setOpenModal] = useState(false);
    const mode = props.mode ? props.mode : "light";
    const renderNavBar = () => {
        return _.map(Routes.container, (item, id)=> {
            if(item.hidden) return null;
            return <TextDecorator key={id} className={styles.navText} style={useAppSelector(getCurrentTitle)===item.title?{color: '#16B4FF'}:{}} onClick={goTo(item.path, item.title)} mode={mode} >
                {item.title}
            </TextDecorator>
        })
    }
    return (<div className="ps-4 pe-5 pt-4 d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <IconButton className="ms-3" onClick={goTo("/", "")} ><img src={Mark} width='45' /></IconButton>
        {renderNavBar()}
    </div>
    <div className="d-flex align-items-center">
        <IconButton className="mx-5" onClick={()=>dispatch(setDark())}><img src={isDark?Light:Dark} /></IconButton>
        <Button className={styles.connectBtn} onClick={()=>setOpenModal(true)} sx={{textTransform: 'none', letterSpacing: 2}} ><TextDecorator mode={mode}>Connect wallet</TextDecorator></Button>
    </div>
    <Popup open={openModal} onClose={()=>setOpenModal(false)} />
</div>);
}