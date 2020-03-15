import React, { useContext } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import AppContext from 'context';
import ExitButton from './atoms/ExitButton';

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  top: 100px;
  right: 0;
  left: 160px;
  bottom: 30px;
  z-index: 2;
  background-color: ${colorWithOpacity(white, 0.8)};
  width: 500px;
  transform: ${({ isVisible }) => `translateY(${isVisible ? 0 : '-300%'})`};
  transition: transform 0.5s ease;

  @media screen and (max-width: 992px) {
    left: 145px;
    top: 95px;
  }

  @media screen and (max-width: 768px) {
    top: 85px;
    right: 30px;
    left: 160px;
    width: auto;
  }

  @media screen and (max-width: 576px) {
    right: 30px;
    left: 30px;
    top: 30px;
    background-color: ${colorWithOpacity(white, 0.9)};
  }

  @media screen and (max-width: 420px) {
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
`;

const UserPanel = () => {
  const { userPanelVisibility, setUserPanelVisibility } = useContext(AppContext);

  const exitButtonOnClick = () => {
    setUserPanelVisibility(false);
  };

  return (
    <Wrapper isVisible={userPanelVisibility}>
      <ExitButton onClick={exitButtonOnClick} />
    </Wrapper>
  );
};

export default UserPanel;
