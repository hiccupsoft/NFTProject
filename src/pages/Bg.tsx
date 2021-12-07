/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import jellyfish from "../assests/images/Jellyfish.png";
import "./style.scss";
import { useAppSelector } from '../app/hooks';
import {
    getMode,
} from '../actions/ToggleMode';

export const Bg:React.FC = () => {

    const isDark = useAppSelector(getMode);

    const renderJellyFish = () => {
        return <>
            <img src={jellyfish} className="jellyfish-1"/>
            <img src={jellyfish} className="jellyfish-2"/>
            <img src={jellyfish} className="jellyfish-3"/>
        </>
    }

    const renderBubbles = () => {
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
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}