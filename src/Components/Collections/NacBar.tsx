/* eslint-disable @typescript-eslint/no-redeclare */
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import './styles.scss';
import _ from 'lodash'

export enum CollectionsList {
    None, MyCollection, Uncommen, Rare, Epic, Legendary, Crypto
}

const navList = [
    {className: "fill_btn", title: "My collection", variant: "contained", icon: null, id: CollectionsList.MyCollection},
    { title: "Uncommen Whales", variant: "text", id: CollectionsList.Uncommen},
    { title: "Rare Whales", variant: "text", id: CollectionsList.Rare},
    { title: "Epic Whales", variant: "text", id: CollectionsList.Epic},
    { title: "Legendary whales", variant: "text", id: CollectionsList.Legendary},
    { title: "Crypto whales", variant: "text", id: CollectionsList.Crypto},
];

interface NaveBar {
    onClick: (id:CollectionsList) => void;
}

export const NaveBar: React.FC<NaveBar> = (props:NaveBar) => {
    const clickList = (id:CollectionsList) => () => {
        props.onClick(id);
    }

    const renderNavBar = () => {
        return _.map(navList, (x, id)=>{
            return <Button className={x.className + " mx-5"} 
                            style={{color: 'white'}} 
                            variant={x.variant as any} 
                            endIcon={x.icon} 
                            key={id} 
                            onClick={clickList(x.id)}
                    >
                {x.title}
            </Button>
        })
    }
    return (<ButtonGroup className="sub_nav_bar mt-5 py-3" sx={{width: '100%'}}>
        {renderNavBar()}
    </ButtonGroup>);
}