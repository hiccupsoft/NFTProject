import { styled } from '@mui/material/styles';
import { Box, Button, Paper } from '@mui/material';


export const DiveButton = styled((props: any)=>(<Button {...props} />))`
    background: #16B4FF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 22px #16B4FF48;
    border-radius: 31px;
    line-height: 26px;
    font-family: Avenir Light;
    letter-spacing: 0.95px;
    width: ${(props)=>props.isMobile ? '204px' : '341px'};
    height: ${(props)=>props.isMobile ? '40px' : '62px'};
    color: #FFFFFF;
    padding: 10px;
    transition: all 0.3s;
    &:before {
        content: "";
        position: absolute;
        bottom: -30px;
        left: 50%;
        transition: all 0.3s;
        width: 15px;
        height: 15px;
        border: 3px solid white;
        border-left-width: 0px;
        border-bottom-width: 0px;
        transform: translateX(-50%) rotate(135deg);
    }
    &:hover {
        width: ${(props)=>props.isMobile ? '214px' : '365px'};
        height: ${(props)=>props.isMobile ? '46px' : '66px'};
        background: #16B4FF 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 33px #16B4FF;
        border-radius: 39px;
        letter-spacing: ${(props)=>props.isMobile ? '0.95px' : '3.8px'};
        transition: all 0.3s;
    }
    &:hover:before {
        bottom: ${(props)=>props.isMobile ? '-30px' : '-80px'};
    }
`

export const CustomButton = styled((props: any)=>(<Button {...props} />))`
    background: ${(props)=>props.transparent ? '' : '#16B4FF 0% 0% no-repeat padding-box'};
    border: ${(props)=>props.transparent ? '1px solid #16B4FF;' : ''};
    box-shadow: ${(props)=>props.transparent ? '' : '0px 0px 40px #16B4FF'};
    border-radius: 31px;
    line-height: 26px;
    font-family: Avenir Light;
    font-size: ${(props)=>props.isMobile ? '11px !important' : '18px !important'};
    letter-spacing: 0.95px;
    padding: ${(props)=>(props.isMobile ? '10px 25px !important': '20px 70px !important')};
    color: #FFFFFF;
    padding: 10px;
    transition: all 0.3s;
    &:hover {
        padding: ${(props)=>(props.isMobile ? '11px 26px !important': '22px 72px !important')};
        background: #16B4FF 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 50px #16B4FF;
        border-radius: 39px;
        letter-spacing: ${(props)=>props.isMobile ? '1.6px' : '3.8px'};
        transition: all 0.3s;
    }
`;

export const Label = styled((props: any)=>(<Paper {...props} />))`
    text-align: center;
    background:  #0C0121 0% 0% no-repeat padding-box;
    color: #FFFFFF;
    font: normal normal normal 14px/26px Avenir;
    position: absolute;
    padding: ${(props)=>props.cell===2 ? `1px 5px` : '2px 10px'};
    top: ${(props)=>props.cell===2 ? `70px` : '125px'};
    right: ${(props)=>props.cell===2 ? `30px` : '40px'};
 `

export const GetItButton = styled((props: any)=>(<button {...props} />))`
    outline: none;
    background-color: transparent;
    border: 1px solid #025881;
    border-radius: ${(props)=>props.cell ? `${10/props.cell}px  !important` : '10px !important'};
    width: 100%;
    padding: ${(props)=>props.cell ? `${25/props.cell}px  !important` : '25px !important'};
    font: normal normal 900 15px/20px Avenir;
    color: ${(props)=>props.isDark?'white':'#003C58'};
    letter-spacing: ${(props)=>props.cell ? `${4/props.cell}px` : '4px'};
`

export const ItemTitle = styled((props: any)=>(<Box {...props} />))`
    outline: none;
    background-color: transparent;
    padding: ${(props)=>props.cell ? `${20/props.cell}px` : '20px'};
    width: 100%;
    font: normal normal 900 15px/20px Avenir;
    font-size: ${(props)=>props.cell ? `${40/props.cell}px` : '40px'};
    color: ${(props)=>props.isDark?'white':'#003C58'};
`

export const MenuButton = styled((props: any)=>(<Button {...props} />))`
    background: ${
        (props)=>{
            if(!props.isDark)
                return props.isFilled ? '#053554 0% 0% no-repeat padding-box' : '';
            else return props.isFilled ? `#16B4FF 0% 0% no-repeat padding-box` : ''
    }};
    color: white;
    border-radius: 8px;
    border: ${(props)=>props.isDark ? `1px solid #16B4FF` : '1px solid #053554'};
    min-width: 146px;
` 