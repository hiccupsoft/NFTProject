import { Box, Button } from '@mui/material';
import React   from 'react';
import './styles.scss'
import Ship from "../../../assests/images/shipIcon.png";

interface CustomAnimButtonProps {
    children?: any
    dark?: boolean
}

const CustomAnimButton:React.FC<CustomAnimButtonProps> = (props:CustomAnimButtonProps) => {
    return <Button 
                className="anim_btn" 
                sx={{ border: '1px solid #16B4FF8E'}}
                variant="outlined" 
                endIcon={
                    <Box className="d-flex flex-row align-items-center btn-ico" style={{position:'relative'}}><img src={Ship} className="hover_on" /></Box>
                }
            >
        <Box className="anim_btn_font" color={props.dark? "#021124":"white"} ><b>{props.children}</b></Box>
    </Button>
}

export default CustomAnimButton;
