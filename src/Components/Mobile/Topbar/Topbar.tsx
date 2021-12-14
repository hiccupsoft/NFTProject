/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mark from "../../../assests/images/markIcon.png";
import Dark from "../../../assests/images/Dark-toggle-icon.png";
import Light from "../../../assests/images/Daylight-toggle.png";
import PieIcon from "../../../assests/images/pieIcon.png";
import './styles.scss';
import { Box, Button, IconButton } from '@mui/material';
import Popup from "../PopupModal/Popup"
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    setDark,
    getMode,
    setCurrentTitle,
} from '../../../actions/ToggleMode';
import RightSidebar from '../../Mobile/RightSidebar';

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
    const [openRightSidebar, setOpenRightSidebar] = useState(false);
    const openSidebar = () => {
        setOpenRightSidebar(true)
    }

    const mode = isDark ? "dark-" + (props.mode || "") : "light-" + (props.mode || "");

    return (<div className={`px-4 py-3 d-flex align-items-center justify-content-between bg-${mode}`}>
    <div className="d-flex align-items-center topbar_icon_container" style={{marginRight: 50}}>
        <IconButton className="ms-3" onClick={goTo("/", "")} ><img src={Mark} width='30' /></IconButton>
    </div>
    <div className="d-flex align-items-center justify-content-around w-100">
        <Button className={`m_connectBtn-${mode}`} onClick={()=>setOpenModal(true)} sx={{textTransform: 'none'}} >Connect wallet</Button>
        <IconButton className="mx-1" onClick={()=>dispatch(setDark())}><img src={isDark?Light:Dark} width="25" /></IconButton>
        <Box onClick={openSidebar} ><img src={PieIcon} width="24" /></Box>
    </div>
    <Popup open={openModal} onClose={()=>setOpenModal(false)} />
    <RightSidebar isOpen={openRightSidebar} onClose={()=>setOpenRightSidebar(false)} />
</div>)
}