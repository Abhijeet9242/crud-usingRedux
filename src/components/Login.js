import React, { useState } from 'react';
import styled from 'styled-components';
import  TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import  Checkbox  from '@mui/material/Checkbox';
import  FormControlLabel  from '@mui/material/FormControlLabel';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from './Navbar';
import Footer from './Footer';



const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background-Color:#FFFFFF;
 
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #3f51b5;
  color: white;
  
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
 
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 10px  !important;
 
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password} Remember Me: ${rememberMe}`);
  };

  return (
    <>
    <Navbar/>
    <StyledWrapper>
      <StyledFormWrapper>
        <StyledIconWrapper>
          <PersonIcon/>
        </StyledIconWrapper>
        <h2>Sign In</h2>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextField
            variant="outlined"
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            autoFocus
          />
          <StyledTextField
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMeChange}
                name="rememberMe"
                color="primary"
              />
            }
            label="Remember me"
          />
          <StyledButton type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </StyledWrapper>
    <Footer/>
    </>
  );
}
