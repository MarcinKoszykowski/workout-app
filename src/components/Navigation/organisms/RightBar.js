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
    flex-direction: row;
    right: 30px;
    top: 20px;
    left: 170px;
    bottom: auto;
  }

  @media screen and (max-width: 576px) {
    top: 15px;
    left: 115px;
    right: 15px;
  }

  @media screen and (max-width: 420px) {
    min-width: 215px;
    right: 15px;
    left: 90px;
    top: 12.5px;
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
