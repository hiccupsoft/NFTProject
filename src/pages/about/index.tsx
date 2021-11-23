import React, { useState } from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { About } from "../../Components/About/About"
import {Bg} from "../Bg"
import {Footer} from "../../Components/Footer/Footer"
import "./styles.scss";

export const Index:React.FC = () => {
    return (
        <>
            <Bg bgClassName="ocean-img-hide" />
            <Topbar mode="dark" />
            <About />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <b>JOIN NOW</b></div>
            </Footer>
        </>
    );
}
