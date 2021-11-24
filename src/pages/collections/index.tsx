import React, { useState } from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { Index as Collections } from "../../Components/Collections"
// import {Bg} from "../Bg"
import {Index as Footer} from "../../Components/Footer"
import "./styles.scss"

import { useAppSelector } from '../../app/hooks';
import {
    getMode,
} from '../../actions/ToggleMode';

export const Index:React.FC = () => {
    const isDark = useAppSelector(getMode);
    return (
        <div className = {isDark? 'collection_container_dark d-flex flex-column' : 'collection_container d-flex flex-column'}>
            {/* <Bg /> */}
            <Topbar mode="dark" />
            <Collections />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <b>JOIN NOW</b></div>
            </Footer>
        </div>
    );
}