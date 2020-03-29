import React, { useContext } from 'react';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import { colorWithOpacity, purple } from 'styled/colors';
import backgroundImage from 'assets/images/background.jpg';
import Background from 'components/Login/atoms/Background';
import Form from 'components/Login/Form';
import MobileBackground from 'atoms/Background';
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

const LoginView = () => {
  const { setUser, setUserIsLogged } = useContext(AppContext);

  useDidMount(() => {
    localStorage.clear();
    setUser({});
    setUserIsLogged(false);
  });

  return (
    <StyledWrapper>
      <Background />
      <StyledMobileBackground image={backgroundImage} />
      <Form />
    </StyledWrapper>
  );
};

export default LoginView;
