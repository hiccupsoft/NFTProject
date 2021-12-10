/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import jellyfish from "../../assests/images/Jellyfish.png";
import "./style.scss";

export const Bg:React.FC = () => {

    const renderJellyFish = () => {
        return <>
            <img src={jellyfish} className="m_jellyfish-1"/>
            <img src={jellyfish} className="m_jellyfish-2"/>
            <img src={jellyfish} className="m_jellyfish-3"/>
        </>
    }

    const renderBubbles = () => {
        return <>
            <div className="m_small-1"></div>
            <div className="m_small-2"></div>
            <div className="m_small-3"></div>
            <div className="m_small-4"></div>
            <div className="m_small-5"></div>
            <div className="m_small-6"></div>
            <div className="m_small-7"></div>
            <div className="m_small-8"></div>
            <div className="m_small-9"></div>
        </>
    }

    return (
        <div className="background">
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}