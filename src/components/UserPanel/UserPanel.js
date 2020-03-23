import React, { useContext } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white, purple } from 'styled/colors';
import AppContext from 'context';
import ExitButton from './atoms/ExitButton';
import UserForm from './organisms/UserForm';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
  top: 40%;
  right: 0;
  left: 180px;
  z-index: 2;
  transform: translateY(-50%);
  background-color: ${colorWithOpacity(white, 0.95)};
  box-shadow: 0 0 10px 5px ${colorWithOpacity(purple, 0.7)};
  border-radius: 15px;
  width: 450px;

  @media screen and (max-width: 992px) {
    left: 160px;
  }

  @media screen and (max-width: 768px) {
    left: 140px;
    width: 400px;
  }

  @media screen and (max-width: 576px) {
    right: 0;
    left: 0;
    background-color: ${white};
    width: 380px;
  }

  @media screen and (max-width: 420px) {
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

const UserPanel = () => {
  const { userPanelVisibility, setUserPanelVisibility } = useContext(AppContext);

  const exitButtonOnClick = () => {
    setUserPanelVisibility(false);
  };

  return (
    userPanelVisibility && (
      <Wrapper>
        <ExitButton onClick={exitButtonOnClick} />
        <UserForm />
      </Wrapper>
    )
  );
};

export default UserPanel;
