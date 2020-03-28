import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Logout from '../molecules/Logout';
import UserButton from '../molecules/UserButton';
import MainButton from '../molecules/MainButton';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 30px;
  bottom: 30px;
  right: 50px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    right: 40px;
  }

  @media screen and (max-width: 576px) {
    flex-direction: row;
    top: 20px;
    left: 145px;
    right: 25px;
    bottom: auto;
  }

  @media screen and (max-width: 420px) {
    right: 20px;
    left: 120px;
    top: 15px;
  }
`;

const RightBar = () => {
  const { mainButtonVisibility } = useContext(AppContext);

  return (
    <Wrapper>
      <UserButton />
      {mainButtonVisibility && <MainButton />}
      <Logout />
    </Wrapper>
  );
};

export default RightBar;
