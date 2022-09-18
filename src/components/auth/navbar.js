import * as React from "react";
import "./styles.css";

import { Button,
    createTheme,
    ThemeProvider,
    Box,
    Menu,
    MenuItem,
    Typography,
    IconButton } from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";

import logo from ".././images/HC_Logo_square.png";

export default function AuthNav() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
   
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

    return (
        <div id="navbar">
            <div>
                <nav className="nav">
                    {/* <img src={logo} className="logo" /> */}
                    <h1 className="brand">DeFi Mortgage</h1>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <ThemeProvider theme={theme}>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                sx={{margin: '10px', borderRadius: '25px'}}> 
                                <strong>LOGIN</strong>
                            </Button>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                sx={{margin: '10px', borderRadius: '25px'}}>
                                <strong>SIGN UP</strong>
                            </Button>
                        </ThemeProvider>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <ThemeProvider theme={theme}>                            
                            <IconButton
                                size="large"
                                aria-label="navigation options"
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
                                <MenuItem>LOGIN</MenuItem>
                                <MenuItem>SIGN UP</MenuItem>
                            </Menu>
                        </ThemeProvider>
                    </Box>
                </nav>
            </div>
        </div>
    );
}