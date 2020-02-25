import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from 'assets/images/background.jpg';
import { purple, black, colorWithOpacity, lightGrey } from 'styled/colors';
import { login, register } from 'data/value';
import Button from './atoms/Button';
import LoginForm from './organisms/LoginForm';
import RegisterForm from './organisms/RegisterForm';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  flex: 1;
  max-width: 600px;
  background-color: ${lightGrey};
  box-shadow: -10px 0 35px 0 ${colorWithOpacity(black, 0.7)};

  @media screen and (min-width: 1800px) {
    max-width: 700px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 500px;
  }

  @media screen and (max-width: 992px) {
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    max-width: none;
    box-shadow: none;
    background-color: transparent;
  }
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorWithOpacity(purple, 0.6)};
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const Form = () => {
  const {
    button: { register: registerButton },
  } = login;

  const {
    button: { login: backToLogin },
  } = register;

  const [formType, setFormType] = useState(true);

  const handleButtonOnClick = () => setFormType(!formType);

  return (
    <Wrapper>
      <Box>
        {formType ? <LoginForm /> : <RegisterForm />}
        <StyledButton onClick={handleButtonOnClick}>{formType ? registerButton : backToLogin}</StyledButton>
      </Box>
      <Background />
    </Wrapper>
  );
};

export default Form;
