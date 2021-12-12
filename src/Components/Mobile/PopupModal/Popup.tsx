/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { IconButton, styled } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Metamask from "../../../assests/images/Metamask-logo.png";
import Wallet from "../../../assests/images/walletconnect-logo.png";
import "./styles.scss"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
};

const styleContent = {
    width: 407,
    height: 361,
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 13,
}

interface PopupProps {
    open: boolean;
    onClose: ()=>void;
}

const MetamaskButton = styled(Button)({
    background: 'transparent linear-gradient(260deg, #FFB51C 0%, #FF6704 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 37,
    height: 60,
    width: '90%',
    justifyContent: 'space-between',
    color: 'white',
    textTransform: 'none',
    font: 'normal normal medium 26px/31px Mosk',
});

const WalletButton = styled(Button)({
    background: 'transparent linear-gradient(263deg, #16B4FF 0%, #8AD5FA 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 37,
    height: 60,
    width: '90%',
    justifyContent: 'space-between',
    color: 'white',
    textTransform: 'none',
    font: 'normal normal medium 26px/31px Mosk',
});

export default function TransitionsModal(props: PopupProps) {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        props.onClose();
    }

    React.useEffect(()=>{
        if(props.open && open !== props.open)
            setOpen(props.open)
    }, [props.open])

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            sx={{
                backdropFilter: "blur(10px)",
            }}
        >
            <Fade in={open}>
                    <Box sx={style} className="d-flex flex-row">
                        <Box sx={styleContent} className="py-3 pt-1 pb-3 d-flex flex-column align-items-center justify-content-between">
                            <Box className="d-flex flex-row justify-content-around align-items-center w-100">
                                <Box className="m_walletTilte ms-5">Connect your wallet</Box>
                                <IconButton onClick={handleClose} ><CancelRoundedIcon style={{color: 'black',fontSize: 60}} /></IconButton>
                            </Box>
 
                            <Box className="m_text-center m_wallet_content_mobile">
                                By connecting your wallet, you agree to our Terms of Service and our 
                                <Box color="#1A5C6F" component="span">Privacy Policy</Box>.
                            </Box>
                            <MetamaskButton className="px-4" endIcon={<img src={Metamask} width='40' />} >MetaMask</MetamaskButton>
                            <WalletButton  className="px-4" endIcon={<img src={Wallet} width='40' />} >MetaMask</WalletButton>
                        </Box> 
                        
                    </Box>
            </Fade>
        </Modal>
    );
}