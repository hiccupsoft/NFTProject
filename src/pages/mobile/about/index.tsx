import React from 'react';
import { Topbar } from "../../../Components/Mobile/Topbar/Topbar"
import { Index as About } from "../../../Components/Mobile/About"
import {Index as Footer} from "../../../Components/Mobile/Footer"
import styles from "./about.module.scss";

import { useAppSelector } from '../../../app/hooks';
import {
    getMode,
} from '../../../actions/ToggleMode';

export const Index:React.FC = () => {
    const isDark = useAppSelector(getMode);
    return (
        <div className={isDark ? styles.aboutContainerDark:styles.aboutContainer}>
            {isDark && <div className={"dark_theme_bg"}>
                <Topbar mode="transparent"/>
                <About />
            </div>}
            {!isDark && <>
                <Topbar mode="transparent" />
                <About />
            </>}
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className={"about_title"}>NEVER MISS ANYTHING. <span style={{fontWeight: 600}}>JOIN NOW</span></div>
            </Footer>
        </div>
    );
}
