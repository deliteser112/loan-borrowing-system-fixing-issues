import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import {Box,
    IconButton,
    InputAdornment,
    TextField,
    Input,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
    MenuItem, 
    styled,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Link,
    responsiveFontSizes } from '@mui/material';
import { Grid, Row, Col } from 'react-flexbox-grid';
import image from '.././images/Banner.jpg';
import Password from './password_field';

import useAuth from '../../hooks/useAuth';
import axios from 'axios'



export default function InputAdornments() {

    const { auth } = useAuth();
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [role, setRole] = useState('')

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

    const StyledTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#886d08',
        },
    });

    const submitRegister = async () => {
        try {
             const response = await axios.post('http://localhost:5002/users',{
              name: name,
              email: email,
              password: password,
              confPassword: confPassword,
              phone_number: phoneNumber,
              role: role
              
             })
            console.log(response) ;
            // console.log("access Token:" + response.data.accessToken)
            //  // verify roles from access token and navigate according to roles
            // const token = response.data.accessToken;
            // const decodedToken = jwt.verify(token, 'jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225')
            // const userRoles = decodedToken.role
            // console.log(userRoles)
            // setAuth({decodedToken, userRoles, userAuth});
            // // console.log(decodedToken.role);
            
            // if (userRoles == "admin") {
            //        navigate('/admin_kyc')
            //   } else if (userRoles == 'borrower') {
            //          console.log('this is borrower')
            //          navigate('/borrower')
            //   } else if (userRoles == 'user') {
            //       navigate('/lender/lender_kyc')
            //   }
             
    
        } catch(error) {
            console.log(error)
        }
        }

    return (
        <div className='auth--content'>
            <Box>
                <Row>
                    <ThemeProvider theme={responsive}>                    
                        <Col xs={12} lg={6} className="auth--form">
                            <ThemeProvider theme={theme}>                            
                                <Typography variant="h4" color="secondary" fontWeight="700">SIGN UP</Typography>
                                <Box sx={{ justifyContent: 'center'}}>
                                    <Row>
                                        <Col>
                                            <StyledTextField
                                                label="Full Name"
                                                id="signup-name"
                                                sx={{ m: 1, width:{xs: '35ch', md: '45ch'}}}
                                                onChange={(e) => setName(e.target.value) }
                                            />  
                                            <StyledTextField
                                                label="E-mail Address"
                                                id="signup-email"
                                                sx={{ m: 1, width:{xs: '35ch', md: '45ch'}}}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />                        
                                        </Col>
                                        <Col>
                                            <Password 
                                            title="Password"
                                            id="signup-password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            />
                                            
                                            <Password 
                                            title="Confirm Password"
                                            id="signup-confirm-password"
                                            onChange={(e) => setConfPassword(e.target.value)}
                                            />
                                        </Col>
                                        <Col>
                                            <Row center='xs'>
                                                <Box sx={{width:{xs: '45ch', md: '100ch'}, 
                                                    textAlign: 'left', backgroundColor: '#f3f5fd',
                                                    fontSize: '0.8em'}}>
                                                   <div className='password-rules'>
                                                     <ul>
                                                         <li>Password must be at least 8 characters</li>
                                                         <li>Password must contain one number</li>
                                                         <li>Password must contain one capital letter</li>
                                                     </ul>
                                                   </div>
                                                </Box>
                                            </Row>
                                            
                                        </Col>
                                        <Col>
                                            <StyledTextField
                                                label="Phone number"
                                                id="signup-number"
                                                type="number"
                                                sx={{ m: 1, width:{xs: '35ch', md: '45ch'}}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">
                                                        +60
                                                    </InputAdornment>
                                                }}
                                                onInput = {(e) =>{
                                                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,9)
                                                    setPhoneNumber(e.target.value)
                                                }}
                                                
                                            />  
                                            <StyledTextField
                                                label="Register As"
                                                select
                                                id="signup-type"
                                                sx={{ m: 1, width:{xs: '35ch', md: '45ch'}}}
                                                onChange={(e) => setRole(e.target.value)}
                                            >
                                                <MenuItem value='borrower'>Borrower</MenuItem>
                                                <MenuItem value='lender'>Investor</MenuItem>
                                            </StyledTextField>                        
                                        </Col>
                                        <Col>
                                            <Typography>Got A Referral Code? Please Enter Here</Typography>
                                        </Col>
                                        <Col>
                                            <StyledTextField
                                                label="Referral Code"
                                                id="signup-refcode"
                                                sx={{ m: 1, width:{xs: '35ch', md: '45ch'}}}
                                            />  
                                        </Col>
                                    </Row>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <FormGroup sx={{margin: 1, width:{xs: '35ch', lg: '75ch'}, paddingLeft:{xs: 0, lg: '15ch'}}}> 
                                            <FormControlLabel control={<Checkbox/>}   label={
                                                <div>
                                                    <span>I agree to HomeCrowd's </span>
                                                    <Link to={'/terms'}>Terms of Use</Link>
                                                    <span> & </span>
                                                    <Link to={'/privacy'}>Privacy Policy</Link>
                                                </div>
                                                } 
                                            />
                                        </FormGroup>
                                    </div> 
                                    <div>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            sx={{margin: 1, width:{xs: '35ch', md: '45ch'} , borderRadius: '25px'}}> 
                                            <strong>SIGN UP</strong>
                                        </Button>
                                    </div>                    
                                </Box>
                            </ThemeProvider>
                        </Col>
                    </ThemeProvider>
                    <Col xs={12} lg={6}>
                   <div className='banner'>
                     <img src={image} alt="" className='banner-pic'/>
                   </div>
                    </Col>
                </Row>
            </Box>
        </div>
    );
}
