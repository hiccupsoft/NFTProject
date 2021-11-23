/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Ocean from "../../assests/images/ocean-background.png";
import jellyfish from "../../assests/images/Jellyfish.png";

export const Bg:React.FC = () => {
    return (
        <div className="background">
            <img src={Ocean} className="ocean-img"/>
            <div className="linear-image"></div>
            <div className="small-1"></div>
            <div className="small-2"></div>
            <div className="small-3"></div>
            <div className="small-4"></div>
            <div className="small-5"></div>
            <div className="small-6"></div>
            <div className="small-7"></div>
            <div className="small-8"></div>
            <div className="small-9"></div>
            <img src={jellyfish} className="jellyfish-1"/>
            <img src={jellyfish} className="jellyfish-2"/>
            <img src={jellyfish} className="jellyfish-3"/>
        </div>
    );
}