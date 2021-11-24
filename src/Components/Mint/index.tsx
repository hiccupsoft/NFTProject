import React,{useState} from 'react';
import "./styles.scss";
import { Box, Button, ButtonGroup, Grid, IconButton, styled, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Mark from "../../assests/images/markIcon.png";
import Ether from "../../assests/images/etherIcon.png";
import CustomAnimButton from '../CustomAnimButton';

interface MintProps {
}

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(12),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CustomButton = styled(Button)(({theme})=>({
    background: 'transparent linear-gradient(226deg, #DFF6FD 0%, #9DD5E6 100%) 0% 0% no-repeat padding-box',
    borderRadius: 8,
    color: '#053554',
    minWidth: '50px !important',
    font: 'normal normal bold 25px/70px Work Sans'
}));

const CustomField = styled((props: any) => (
    <input {...props} />
  ))`
    background: #073C58 0% 0% no-repeat padding-box;
    border: 0.5px solid #086A98;
    color: white;
    font: normal normal medium 25px/29px Work Sans !important;
    text-align: center;
    border-radius: 4px;
    padding: 10px 5px;
    max-width: 124px;
  `;
const HoverButton = styled(Button)(({theme})=>({
    backgroundColor: '#9B9B9B',
    color: 'white',
    '@:hover':{
        backgroundColor: '#16B4FF',
        color: 'white',
    }
}));

export const Index: React.FC<MintProps> = (props: MintProps) => {
    const navigate = useNavigate();
    const goTo = (url: string) => () => {
        navigate(url);
    }
    const [isHover, setHover] = useState(false);
    return (
        <Grid container className="mint_main" >
            <Grid item xs={1} />
            <Grid item xs={4}>
                <Box className="d-flex flex-column align-items-center justify-content-center l_container" color="white">
                    <Box className="mint_title">Mint your own</Box>
                    <div className="d-flex flex-row align-items-center">
                        <img src={Mark} width='40' /><span style={{ fontSize: '47px', fontWeight: 600 }}>ryptowhales</span>
                    </div>
                    <Box className="d-flex flex-column align-items-center justify-content-between l_element">
                        <Box className="d-flex flex-row px-4 py-2 text_field justify-content-around">
                            <Box>Total adopted whales: </Box>
                            <Box>0 / 10,000</Box>
                        </Box>
                        <Box className="w-100 px-4 py-3 ether_board mt-3">
                            <Box color="#16B4FF">Mint 1 CryptoWhale for</Box>
                            <Box className="d-flex flex-row align-items-center justify-content-start font">
                                <img src={Ether} width='30' className="me-3" />
                                <Box className="me-5">0.01</Box>
                                <Box><b>ETH</b></Box>
                            </Box>
                        </Box>
                        <Grid container className="w-100 mt-3">
                            <Grid item xs={7}>
                                <Box className="d-flex flex-column align-items-start justify-content-start">
                                    <Box color="#16B4FF" >How many whales?</Box>
                                    <Grid container className="w-100 mt-3" >
                                        <Grid item xs={1}>
                                            <CustomButton style={{width: 50, height: 50}} >-</CustomButton>
                                        </Grid>
                                        <Grid item xs={2} />
                                        <Grid item xs={5}>
                                            <CustomField className="input_field" />
                                        </Grid>
                                        <Grid item xs={2} />
                                        <Grid item xs={1}>
                                            <CustomButton style={{width: 50, height: 50}}>+</CustomButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={1}/>
                            <Grid item xs={4}>
                                <Box className="d-flex flex-column align-items-start justify-content-start">
                                    <Box color="#16B4FF" >Total costs</Box>
                                    <Box className="w-100 px-3 py-2 total_input mt-3">
                                        <img src={Ether} width='20' />
                                        <span className="ms-1 me-1">0.02</span>
                                        <span >ETH</span>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <HoverButton 
                            className="mt-5" 
                            variant="contained" 
                            fullWidth={true} 
                            onMouseEnter={()=>setHover(true)}
                            onMouseLeave={()=>setHover(false)}
                        >
                            {!isHover?'SELECT AMOUNT OF WHALES':'MINT 2 WHALES FOR 0.02 ETH + GAS'}
                        </HoverButton>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={4}>
                <Box className="d-flex flex-column align-items-start justify-content-center r_container" color="white">
                    <Box className="r_title">About</Box>
                    <Box className="r_container">
                        Whales in crypto are legendary icons of wealth and status. They include the likes of Vitalik Buterin and Mark Cuban. Taking the concept of a crypto whale and turning it into a visual representation of a luxury-crypto-themed-whale NFT creates a material representation of the wealth and power that comes with being a crypto whale. To hold the whale makes you the whale. This is less of a product and more of a trophy, a trophy marketed and directed to the largest holders. A way to display your status and unbelievable wealth.
                    </Box>
                    <Box>
                        <CustomAnimButton >Go to Opensea</CustomAnimButton>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}