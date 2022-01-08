/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import Ocean from "../../../assests/images/ocean-background.png";
import jellyfish from "../../../assests/images/Jellyfish.svg";
import "./styles.scss";

export const Bg:React.FC = () => {
    const renderJellyFish = () => {
        return <>
            <img src={jellyfish} className="jellyfish-mint-1"/>
            <img src={jellyfish} className="jellyfish-mint-2"/>
            <img src={jellyfish} className="jellyfish-mint-3"/>
        </>
    }

    const renderBubbles = () => {
        return <>
            <div className="small-mint-1"></div>
            <div className="small-mint-2"></div>
            <div className="small-mint-3"></div>
            <div className="small-mint-4"></div>
            <div className="small-mint-5"></div>
            <div className="small-mint-6"></div>
            <div className="small-mint-7"></div>
            <div className="small-mint-8"></div>
            <div className="small-mint-9"></div>
        </>
    }

    return (
        <div className="mint_bg">
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}