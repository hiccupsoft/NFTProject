import React from 'react';
import { Topbar } from "../../../Components/Mobile/Topbar/Topbar"
import { Index as Home } from "../../../Components/Mobile/Home"
import {Bg} from "../Bg"
import {Index as Footer} from "../../../Components/Mobile/Footer"
import "./styles.scss"

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const WelcomeMobile:React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (
        <div className={isDark? "m_home_container_dark":"m_home_container"}>
            <Bg />
            {isDark && <div className="m_dark_theme_bg">
                <Topbar mode="transparent"/>
                <Home />
            </div>}
            {!isDark && <>
                <Topbar mode="transparent" />
                <Home />
            </>}
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}