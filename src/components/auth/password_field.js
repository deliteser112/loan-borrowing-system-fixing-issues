import * as React from 'react';
import {FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    createTheme,
    ThemeProvider,
    styled } from '@mui/material';

import {Visibility, VisibilityOff} from '@mui/icons-material';


const PasswordField = (props) => {
    const [password, setPassword] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setPassword({
          ...password,
          showPassword: !password.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    const StyledLabel = styled(InputLabel)({
        '&.Mui-focused':{
            color: '#886d08',
        }
    })
    return (
        <FormControl sx={{ m: 1, width:{xs: '35ch', md: '45ch'}}} variant="outlined">
            <StyledLabel htmlFor={props.id}>{props.title}</StyledLabel>
            <OutlinedInput
                id={props.id}
                type={password.showPassword ? 'text' : 'password'}
                value={password.password}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label={props.id}
            />
        </FormControl>
    )
}

export default PasswordField;
