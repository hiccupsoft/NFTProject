import React from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { Index as Home } from "../../Components/Home"
import {Bg} from "../Bg"
import {Index as Footer} from "../../Components/Footer"
import "./styles.scss"

import { useAppSelector } from '../../app/hooks';
import {
    getMode,
} from '../../actions/ToggleMode';

export const Welcome:React.FC = () => {

    const isDark = useAppSelector(getMode);

    return (
        <div className={isDark? "home_container_dark":"home_container"}>
            <Bg />
            <Topbar mode={isDark?"dark":"light"}/>
            <Home />
            <Footer showTitle={true} showButton={true} showIcons={true} />
        </div>
    );
}