import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import mainImage from 'assets/images/main.jpg';
import { purple, colorWithOpacity } from 'styled/colors';
import { useHistory } from 'react-router';
import { login as loginURL } from 'data/routes';
import UserContext from 'contexts/UserContext';
import LoaderContext from 'contexts/LoaderContext';
import animations from 'styled/animations';
import NavigationTemplate from 'templates/NavigationTemplate';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url(${mainImage}) no-repeat top right;
  background-size: cover;
  animation: ${animations.opacityZeroToOne} 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorWithOpacity(purple, 0.3)};
    z-index: 1;
  }
`;

const MainView = () => {
  const { login } = useContext(UserContext);
  const { setLoading } = useContext(LoaderContext);
  const history = useHistory();

  const checkLogin = () => {
    if (!login) {
      history.push(loginURL);
    }
  };

  useEffect(() => {
    checkLogin();
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <>
      <NavigationTemplate />
      <Background />
    </>
  );
};

export default MainView;
