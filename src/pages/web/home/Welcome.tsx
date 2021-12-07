import React from 'react';
import { Topbar } from "../../../Components/Web/Topbar/Topbar"
import { Index as Home } from "../../../Components/Web/Home"
import {Bg} from "../Bg"
import {Index as Footer} from "../../../Components/Web/Footer"
import "./styles.scss"

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Welcome:React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (
        <div className={isDark? "home_container_dark":"home_container"}>
            <Bg />
            {isDark && <div className="dark_theme_bg">
                <Topbar mode={isDark?"dark":"light"}/>
                <Home />
            </div>}
            {!isDark && <>
                <Topbar mode={isDark?"dark":"light"}/>
                <Home />
            </>}
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}