import * as React from 'react';
import jwt from 'jsonwebtoken'
import { useState, useContext, useEffect } from 'react';
import './styles.css';
import { Box,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
    styled,
    responsiveFontSizes,
    FormControl,
    InputLabel,
    OutlinedInput, Input } from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { Grid, Row, Col } from 'react-flexbox-grid';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import image from '.././images/Banner.jpg';
import { StepContext } from '../../App';

import useAuth from '../../hooks/useAuth';





export default function InputAdornments() {

   
    const [userAuth, setUserAuth] = useState('');
    const [passwordAuth, setPasswordAuth] = useState('');

    const {setAuth} = useAuth();
    const {auth} = useAuth();

    let navigate = useNavigate()

    useEffect(() => {
        console.log(auth);
    },[auth])

    const submitLogin = async () => {
      try {
           const response = await axios.post('http://localhost:5002/login',{
            email: userAuth,
            password: passwordAuth
           })
          console.log(response) ;
          console.log("access Token:" + response.data.accessToken)
           // verify roles from access token and navigate according to roles
          const token = response.data.accessToken;
          const decodedToken = jwt.verify(token, 'jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225')
          const userRoles = decodedToken.role
          console.log(userRoles)
          setAuth({decodedToken, userRoles, userAuth});
          // console.log(decodedToken.role);
          
          if (userRoles == "admin") {
                 navigate('/admin_kyc')
            } else if (userRoles == 'borrower') {
                   console.log('this is borrower')
                   navigate('/borrower')
            } else if (userRoles == 'lender') {
                navigate('/lender/lender_kyc')
            }
           
  
      } catch(error) {
          console.log(error)
      }
      }

    let responsive = createTheme();
    responsive = responsiveFontSizes(responsive);

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
        typography: {
            fontFamily: [
              'Caladea',
              'serif',
            ].join(','),
        },
    });

    
    
      // const handleChange = (prop) => (event) => {
      //   setPassword({ ...password, [prop]: event.target.value });
      // };
    
      // const handleClickShowPassword = () => {
      //   setPassword({
      //     ...password,
      //     showPassword: !password.showPassword,
      //   });
      // };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const StyledTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#886d08',
        },
    });

    const StyledLabel = styled(InputLabel)({
        '&.Mui-focused':{
            color: '#886d08',
        }
    })

  return (
    <div className='auth--content'>
        <Box>
            <Row>
                <ThemeProvider theme={responsive}>                        
                    <Col md={12} lg={6} className="auth--form">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h4" color="secondary" fontWeight="700">LOGIN</Typography>
                            <Box sx={{ justifyContent: 'center'}}>
                            <div>
                            <Input
                                    label="E-mail Address"
                                    placeholder='E-mail Address'
                                    id="login-email"
                                    sx={{ m: 1, width:{xs: '35ch', md: '55ch'}}}
                                    value={userAuth}
                                    onChange = {e => setUserAuth(e.target.value)}
                                />                                     
                            </div>
                            <div>
                            <Input
                                    
                                    placeholder='Password'
                                    id="login-email"
                                    sx={{ m: 1, width:{xs: '35ch', md: '55ch'}}}
                                    value={passwordAuth}
                                    onChange = {e => setPasswordAuth(e.target.value)}
                                />           
                            </div>
                            <div>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    sx={{margin: 1, width:{xs: '30ch', md: '55ch' } , borderRadius: '25px'}}
                                    onClick={submitLogin}
                                    
                                    > 
                                    <strong>LOGIN</strong>
                                </Button>
                            </div>                    
                            </Box>
                        </ThemeProvider>
                    </Col>
                </ThemeProvider>
                <Col md={12} lg={6}>
                
                <div className='banner'>
                     <img src={image} alt="" className='banner-pic'/>
                   </div>
                   
                </Col>
            </Row>
        </Box>
    </div>
  );
}
