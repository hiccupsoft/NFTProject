/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Ocean from "../assests/images/ocean-background.png";
import jellyfish from "../assests/images/Jellyfish.png";
import "./style.scss";

interface BgProps{
    bgClassName?: string;
    shownJellyfish?: boolean;
    shownBubbles?: boolean;
}

export const Bg:React.FC<BgProps> = (props:BgProps) => {
    const renderJellyFish = () => {
        if(!props.shownJellyfish) return null;
        return <>
            <img src={jellyfish} className="jellyfish-1"/>
            <img src={jellyfish} className="jellyfish-2"/>
            <img src={jellyfish} className="jellyfish-3"/>
        </>
    }

    const renderBubbles = () => {
        if(!props.shownBubbles) return null;
        return <>
            <div className="small-1"></div>
            <div className="small-2"></div>
            <div className="small-3"></div>
            <div className="small-4"></div>
            <div className="small-5"></div>
            <div className="small-6"></div>
            <div className="small-7"></div>
            <div className="small-8"></div>
            <div className="small-9"></div>
        </>
    }

    return (
        <div className="background">
            <img src={Ocean} className={props.bgClassName} />
            <div className="linear-image"></div>
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}