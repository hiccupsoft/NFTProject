import React, { useState } from 'react';
import { Topbar } from "../../Components/Topbar/Topbar"
import { Index as Mint } from "../../Components/Mint"
import {Bg} from "../Bg"
import {Index as Footer} from "../../Components/Footer"
import "./styles.scss"

export const Index:React.FC = () => {
    return (
        <div className="mint_container">
            {/* <Bg /> */}
            <Topbar mode="dark"/>
            <Mint />
            <Footer showTitle={true} showButton={true} showIcons={true} >
                <div className="about_title">NEVER MISS ANYTHING. <b>JOIN NOW</b></div>
            </Footer>
        </div>
    );
}