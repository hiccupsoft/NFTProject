import React from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { Index as Mint } from "../../Components/Mint"
import {Bg} from "./MintBg"
import {Index as Footer} from "../../Components/Footer"
import "./styles.scss"

import { useAppSelector } from '../../app/hooks';
import {
    getMode,
} from '../../actions/ToggleMode';

export const Index:React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (
        <div className={isDark?"mint_container_dark":"mint_container"}>
            <Bg />
            <Topbar mode="dark"/>
            <Mint />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <b>JOIN NOW</b></div>
            </Footer>
        </div>
    );
}