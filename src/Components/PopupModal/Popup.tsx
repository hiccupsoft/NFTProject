/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Grid, IconButton, styled } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Metamask from "../../assests/images/Metamask-logo.png";
import Wallet from "../../assests/images/walletconnect-logo.png";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
};

const styleContent = {
    width: 529,
    height: 515,
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 13,
}

const closeBtn = {
    left: -48,
    top: 32
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
    justifyContent: 'space-around',
});

const WalletButton = styled(Button)({
    background: 'transparent linear-gradient(263deg, #16B4FF 0%, #8AD5FA 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 12px #0000001A',
    borderRadius: 37,
    height: 60,
    width: '90%',
    justifyContent: 'space-around',
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
        >
            <Fade in={open}>
                    <Box sx={style} className="d-flex flex-row">
                        <Grid container>
                            <Grid item xs={11} />
                            <Grid item xs={1} >
                                <IconButton onClick={handleClose} sx={closeBtn}><CancelRoundedIcon color="primary" style={{fontSize: 60}} /></IconButton>
                            </Grid>
                            <Grid item xs={11}>
                                <Box sx={styleContent} className="py-5 ps-3 d-flex flex-column align-items-center justify-content-between">
                                    <h2>Connect your wallet</h2>
                                    <Box className="mt-3 text-center me-2">
                                        By connecting your wallet, you agree to our Terms of Service and our 
                                        <Box color="#1A5C6F" component="span">Privacy Policy</Box>.
                                    </Box>
                                    <MetamaskButton endIcon={<img src={Metamask} width='40' />} >MetaMask</MetamaskButton>
                                    <WalletButton endIcon={<img src={Wallet} width='40' />} >MetaMask</WalletButton>
                                </Box> 
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                        
                        
                    </Box>
            </Fade>
        </Modal>
    );
}