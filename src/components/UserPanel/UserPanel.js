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
  top: 50%;
  right: 0;
  left: 160px;
  z-index: 2;
  transform: translateY(-50%);
  background-color: ${colorWithOpacity(white, 0.9)};
  box-shadow: 0 0 10px 5px ${colorWithOpacity(purple, 0.7)};
  border-radius: 15px;
  width: 500px;

  @media screen and (max-width: 992px) {
    left: 145px;
  }

  @media screen and (max-width: 768px) {
    right: 30px;
    left: 160px;
    width: auto;
  }

  @media screen and (max-width: 576px) {
    right: 30px;
    left: 30px;
    background-color: ${colorWithOpacity(white, 0.95)};
  }

  @media screen and (max-width: 420px) {
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
    userPanelVisibility && (
      <Wrapper>
        <ExitButton onClick={exitButtonOnClick} />
        <UserForm />
      </Wrapper>
    )
  );
};

export default UserPanel;
