import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import LoaderContext from 'contexts/LoaderContext';
import { purple, colorWithOpacity } from 'styled/colors';
import animations from 'styled/animations';
import mainImage from 'assets/images/main.jpg';
import NavigationTemplate from 'templates/NavigationTemplate';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url(${mainImage}) no-repeat top left;
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
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [setLoading]);

  return (
    <>
      <NavigationTemplate />
      <Background />
    </>
  );
};

export default MainView;
