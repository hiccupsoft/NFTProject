/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../assests/images/markIcon.png";
import Dark from "../../assests/images/Dark-toggle-icon.png";
import Light from "../../assests/images/Daylight-toggle.png";
import styles from './Topbar.module.scss';
import { TextDecorator } from '../TextDecorator'
import { Button, IconButton } from '@mui/material';
import {Routes} from "../../Routes";
import _ from 'lodash'
import Popup from "../PopupModal/Popup"
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    setDark,
    getMode,
} from '../../actions/ToggleMode';

interface TobarProps{
    mode?: string;
} 

export const Topbar:React.FC<TobarProps> = (props:TobarProps) => {
    const navigate = useNavigate();
    const isDark = useAppSelector(getMode);
    const dispatch = useAppDispatch();
    const goTo = (url:string) => () => {
        navigate(url);
    }
    const [openModal, setOpenModal] = useState(false);
    const mode = props.mode ? props.mode : "light";
    const renderNavBar = () => {
        return _.map(Routes.container, (item, id)=> {
            if(item.hidden) return null;
            return <TextDecorator key={id} className={styles.navText} onClick={goTo(item.path)} mode={mode} >
                {item.title}
            </TextDecorator>
        })
    }
    return (<div className="px-5 pt-4 d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
        <IconButton className="ms-3" onClick={goTo("/")} ><img src={Mark} width='50' /></IconButton>
        {renderNavBar()}
    </div>
    <div className="d-flex align-items-center">
        <IconButton className="mx-5" onClick={()=>dispatch(setDark())}><img src={isDark?Light:Dark} /></IconButton>
        <Button className={styles.connectBtn + " px-4 py-2 ms-5"} onClick={()=>setOpenModal(true)}><TextDecorator mode={mode}>Connect wallet</TextDecorator></Button>
    </div>
    <Popup open={openModal} onClose={()=>setOpenModal(false)} />
</div>);
}