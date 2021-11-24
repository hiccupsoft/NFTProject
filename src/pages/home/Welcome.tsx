import React, { useState } from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { Index as Home } from "../../Components/Home"
import {Bg} from "../Bg"
import {Index as Footer} from "../../Components/Footer"
import "./styles.scss"

export const Welcome:React.FC = () => {
    return (
        <div className="home_container">
            <Bg />
            <Topbar />
            <Home />
            <Footer showTitle={true} showButton={true} showIcons={true} />
        </div>
    );
}