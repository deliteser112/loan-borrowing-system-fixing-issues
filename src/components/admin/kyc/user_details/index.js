import * as React from "react";
import {Box,
    Grid,
    Typography,
    Button,
    Divider,
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
    TextField,
    MenuItem,
    Link,
    IconButton,
    Menu} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert';

import "../style.css";

function UserDetails() {

    let responsive = createTheme();
    responsive = responsiveFontSizes(responsive);

    const divShadow = {
        boxShadow: "1px 2px 9px #808080",
        marginTop: "1em",
        padding: "1em",
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <div style={{textAlign: 'start'}} className="kyc--content">
            <ThemeProvider theme={responsive}>                
                <div>
                    <Typography>MANAGEMENT</Typography>
                    <Typography variant="h5">Approve KYC & DSR</Typography>
                </div>
                <div>
                    <Box sx={{ flexGrow: 1 }} style={divShadow}>
                        <Typography variant="h6" fontWeight="600">KYC Details</Typography>
                        <Divider sx={{ margin: "1em 0", bgcolor: "black" }} />
                        <Grid container spacing={2}>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User Salutation:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(Mr/Mrs/Dr/Ms/Miss)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User NRIC Name:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>User's Full Name</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User Gender:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(Male/Female)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User NRIC:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={4} md={4}>
                                <Typography style={{overflowWrap: 'break-word'}}>YYMMDD-ST-XXXX</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={3} 
                                style={{textAlign: "right"}} 
                                className="validate--button">
                                <Button variant="outlined" sx={{ margin: 0 }}>
                                Validate NRIC
                                </Button>
                            </Grid>
                            <Grid item xs={1} className="validate--icon"></Grid>
                            <Grid item zeroMinWidth xs={1} 
                                className="validate--icon">
                                <IconButton
                                    size="medium"
                                    aria-label="more actions"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="primary">
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="menu-nric"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "flex", md: "none" }
                                    }}>
                                    <MenuItem>VALIDATE NRIC</MenuItem>
                                </Menu>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User DOB:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>YYYY-MM-DD</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} style={divShadow}>
                        <Typography variant="h6" fontWeight="600">KYC Detailed Info</Typography>
                        <Divider sx={{ margin: "1em 0", bgcolor: "black" }} />
                        <Grid container spacing={2}>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User Mobile:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>+601 2 345 6789</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>User Address:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>User's Address</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Education Level:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(SPM/STPM/Diploma/Degree/Master/PhD)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Marital Status:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(Single/Married/Divorced/Widowed)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Race:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(Indian/Chinese/Malay/Kadazan Dusun/Iban/Others)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Dependants:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>User's No. of Dependants</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Social Profile:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Link href="#" style={{overflowWrap: 'break-word'}}>https://user-social-profile.com</Link>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Are you working in a professional line?</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>User's Professional level</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Debt Service Ratio:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(User's DSR)%</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Is Eligible?</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>(Yes/No)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>NRIC Front:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Link href="#" style={{overflowWrap: 'break-word'}}>filepath_to_user_nric_front.pdf</Link>
                            </Grid>                        
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>NRIC Back:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Link href="#" style={{overflowWrap: 'break-word'}}>filepath_to_user_nric_back.pdf</Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} style={divShadow}>
                        <Typography variant="h6" fontWeight="600">Pre App DSR</Typography>
                        <Divider sx={{ margin: "1em 0", bgcolor: "black" }} />
                        <Grid container spacing={2}>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Monthly Net Income:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(User's Monthly Net Income)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Variable Income:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(User's Variable Income)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Investment Income:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(User's Investment Income)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Monthly Fin Commitment:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={4}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(User's Monthly Fin Commitment)</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} style={divShadow}>
                        <Typography variant="h6" fontWeight="600">Pre App Mortgage</Typography>
                        <Divider sx={{ margin: "1em 0", bgcolor: "black" }} />
                        <Grid container spacing={2}>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>App Home Market Value:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(App Home Market Value)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Downpayment:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(Downpayment)</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Combined Monthly Income:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <Typography style={{overflowWrap: 'break-word'}}>RM(Combined Monthly Income)</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} style={divShadow}>
                        <Typography variant="h6" fontWeight="600">Comment in the Email (Only for Rejected)</Typography>
                        <Divider sx={{ margin: "1em 0", bgcolor: "black" }} />
                        <Grid container spacing={2}>
                            <Grid item zeroMinWidth xs={5}>
                                <Typography fontWeight="600" style={{overflowWrap: 'break-word'}}>Comment:</Typography>
                            </Grid>
                            <Grid item zeroMinWidth xs={7}>
                                <TextField select label="Select an option" sx={{width: '100%'}} style={{overflowWrap: 'break-word'}}>
                                    <MenuItem>DSR is too high</MenuItem>
                                    <MenuItem>Incomplete inputs</MenuItem>
                                    <MenuItem>Incorrect file inputs</MenuItem>
                                    <MenuItem>Invalid NRIC number</MenuItem>
                                    <MenuItem>Suspicious account</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div style={{margin: "1em 0"}} className="kyc--buttons">
                    <Button variant="contained" color="success" sx={{marginRight: "1em"}}>APPROVE</Button>
                    <Button variant="contained" color="error" sx={{marginRight: "1em"}}>REJECT</Button>
                    <Button variant="outlined">BACK</Button>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default UserDetails;
