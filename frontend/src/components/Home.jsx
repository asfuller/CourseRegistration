import * as React from 'react';
import "../assets/css/home.css"
import hero_img from "../assets/images/hero-img.jpg"
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Home() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="container">
            <Grid container className="heroContainer" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>
                    <div className="heroText">
                        <h6 className="heroSubTitle">Empower your learning journey with engaging, accessible courses anytime, anywhere.</h6>
                        <h1 className="heroTitle">Welcome to Schoobly: The best LMS for modern school systems</h1>
                        <p className="heroContent">
                            Learn smarter, Grow faster
                        </p>
                    </div>
                </Grid>
                <Grid  size={6}>
                    <img src={hero_img} className="heroImage" alt="Hero" />
                </Grid>
            </Grid>
            {/* Get Started Button */}
            <div className="getStarted">
                <Button onClick={handleOpen} variant="contained">Get Started</Button>
                {/* Modal */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {/* Sign up Form */}
                <Box component="form"
                sx={modalStyle}
                noValidate
                autoComplete="off"
                >
                    <div>
                        {/* H2 Title */}
                        <h2 className="getStartedTitle">Sign up to get started today!</h2>
                        
                        {/* Text Input Fields */}
                        <TextField error id="outlined-basic"
                        label="First Name" defaultValue="First Name"/>
                        <TextField error
                        id="outlined-error-helper-text" label="Last Name"
                        defaultValue="Last Name"
                        helperText="Incorrect entry."/>
                    </div>
                    <div>
                        {/* Password */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                            <IconButton aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Password"/>
                        </FormControl>
                    </div>
                </Box>
                </Modal>
            </div>
        </div>
    );
}
