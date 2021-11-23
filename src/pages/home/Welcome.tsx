import React, { useState } from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { Home } from "../../Components/Home/Home"
import {Bg} from "../Bg"
import {Footer} from "../../Components/Footer/Footer"

export const Welcome:React.FC = () => {
    return (
        <>
            <Bg bgClassName="ocean-img" shownBubbles={true} shownJellyfish={true} />
            <Topbar />
            <Home />
            <Footer showTitle={true} showButton={true} showIcons={true} />
        </>
    );
}