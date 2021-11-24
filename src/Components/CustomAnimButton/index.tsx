import { Box, Button } from '@mui/material';
import React   from 'react';
import SailingRoundedIcon from '@mui/icons-material/SailingRounded';
import './styles.scss'

interface CustomAnimButtonProps {
    children?: any
    dark?: boolean
}

const CustomAnimButton:React.FC<CustomAnimButtonProps> = (props:CustomAnimButtonProps) => {
    // const [isHover, setHover] = useState(false);
    return <Button 
                className="anim_btn pe-5 py-2" 
                variant="outlined" 
                endIcon={
                    <Box className="d-flex flex-row align-items-center px-2 ms-1" style={{position:'relative'}}><SailingRoundedIcon className="hover_on" /></Box>
                } 
                // onMouseEnter={()=>setHover(true)}
                // onMouseLeave={()=>setHover(false)} 
            >
        <Box color={props.dark? "#021124":"white"}><b>{props.children}</b></Box>
    </Button>
}

export default CustomAnimButton;
