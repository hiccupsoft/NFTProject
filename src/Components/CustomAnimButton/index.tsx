import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, {useState}  from 'react';
import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
import './styles.scss'

interface CustomAnimButtonProps {
    img?: any;
    children?: any
}

const CustomAnimButton:React.FC<CustomAnimButtonProps> = (props:CustomAnimButtonProps) => {
    const [isHover, setHover] = useState(false);
    const Icon = props.img;
    // return <Button className="anim_btn" variant="outlined" endIcon={<SailingRoundedIcon className={!isHover?"hover_off":"hover_on"} />} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
    return <Button 
                className="anim_btn pe-5 py-2" 
                variant="outlined" 
                endIcon={
                    <Box className="d-flex flex-row align-items-center px-2 ms-1" style={{position:'relative'}}><SailingRoundedIcon className="hover_on" /></Box>
                } 
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)} 
            >
        <Box color="white"><b>{props.children}</b></Box>
    </Button>
}

export default CustomAnimButton;
