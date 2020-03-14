import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'assets/images/background.jpg';
import Background from 'components/Login/Background';
import MobileBackground from 'atoms/Background';
import Form from 'components/Login/Form';
import { colorWithOpacity, purple } from 'styled/colors';
import Wrapper from 'atoms/Wrapper';

const StyledWrapper = styled(Wrapper)`
  height: 100vh;
  display: flex;
`;

const StyledMobileBackground = styled(MobileBackground)`
  display: none;

  &::after {
    background-color: ${colorWithOpacity(purple, 0.6)};
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const LoginView = () => (
  <StyledWrapper>
    <Background />
    <StyledMobileBackground image={backgroundImage} />
    <Form />
  </StyledWrapper>
);

export default LoginView;
