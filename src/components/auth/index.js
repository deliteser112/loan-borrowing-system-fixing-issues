import * as React from "react";
import "./styles.css";

import Login from "./login";
import Signup from "./signup";

import { Button,
    createTheme,
    ThemeProvider,
    Box,
    Menu,
    MenuItem,
    IconButton,
    responsiveFontSizes,
    Typography } from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";
// import logo from ".././images/HC_Logo_square.png";

export default function Auth() {

    let responsive = createTheme();
    responsive = responsiveFontSizes(responsive);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [currentForm, setCurrentForm] = React.useState("login");

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleLoginClicked = () => {
        setCurrentForm("login");
    }

    const handleSignupClicked = () => {
        setCurrentForm("signup");
    }
   
    const theme = createTheme({
        palette: {
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#fad139',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            main: '#886d08',
          }
        },
    });

    const brand = createTheme({
        palette: {
          primary: {
            main: '#15b0ab'
          },
        },
    });

    brand.typography.h3 = {
        fontFamily: [
            'Quicksand',
            'serif'
        ].join(','),
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
    };

    return (
        <div className="App">
            <ThemeProvider theme={responsive}>                
                <div id="navbar">
                    <div>
                        <nav className="nav">
                         
                            <ThemeProvider theme={brand}>
                                <Typography variant="h3" fontWeight="700" style={{ marginLeft:"15px" }}>DeFi Mortgage</Typography>
                            </ThemeProvider>                                                 
                            {/* <h1 className="brand">DeFi Mortgage</h1> */}
                            <Box md={5} sx={{ display: { xs: "none", md: "flex" } }}>
                                <ThemeProvider theme={theme}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={handleLoginClicked}
                                        sx={{margin: '10px', borderRadius: '25px'}}> 
                                        <strong>LOGIN</strong>
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={handleSignupClicked}
                                        sx={{margin: '10px', borderRadius: '25px'}}>
                                        <strong>SIGN UP</strong>
                                    </Button>
                                </ThemeProvider>
                            </Box>
                            <Box xs={3} sx={{ display: { xs: "flex", md: "none" } }}>
                                <ThemeProvider theme={theme}>                            
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="primary">
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left"
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left"
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: "block", md: "none" }
                                        }}>
                                        <MenuItem onClick={handleLoginClicked}>LOGIN</MenuItem>
                                        <MenuItem onClick={handleSignupClicked}>SIGN UP</MenuItem>
                                    </Menu>
                                </ThemeProvider>
                            </Box>
                        </nav>
                    </div>
                </div>
                {currentForm == "login" ? <Login /> : <Signup />} 
            </ThemeProvider>
        </div>
    );
}