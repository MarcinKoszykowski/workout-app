import React, { useContext } from 'react';
import styled from 'styled-components';
import NavigationTemplate from 'templates/NavigationTemplate';
import AppContext from 'context';
import animations from 'styled/animations';
import { colorWithOpacity, purple } from 'styled/colors';
import sports from 'data/sports';
import MainButton from 'components/Navigation/MainButton';
import { useHistory } from 'react-router';
import { main } from 'data/routes';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: ${({ sport }) => `url(${sport})`};
  background-repeat: no-repeat;
  background-position: center center;
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

const SportView = () => {
  const { sportBackground } = useContext(AppContext);
  const location = window.location.href.slice(28);
  const history = useHistory();

  const mainButtonOnClick = () => {
    history.push(main);
  };

  const setBackground = () => {
    if (sportBackground) {
      return sportBackground;
    } else {
      return sports.find(item => item.name === location).background;
    }
  };

  return (
    <>
      <NavigationTemplate />
      <Background sport={setBackground()} />
      <MainButton onClick={mainButtonOnClick} />
    </>
  );
};

export default SportView;
