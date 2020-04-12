import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Logout from '../molecules/Logout';
import UserButton from '../molecules/UserButton';
import MainButton from '../molecules/MainButton';
import CalendarButton from '../molecules/CalendarButton';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 30px;
  bottom: 30px;
  right: 50px;
  min-height: 450px;
  z-index: 1;

  @media screen and (max-width: 992px) {
    right: 40px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    right: 30px;
    top: 20px;
    left: 170px;
    bottom: auto;
    min-height: 70px;
  }

  @media screen and (max-width: 576px) {
    top: 15px;
    left: 115px;
    right: 15px;
    min-height: 60px;
  }

  @media screen and (max-width: 420px) {
    min-width: 215px;
    right: 15px;
    left: 90px;
    top: 12.5px;
    min-height: 45px;
  }
`;

const RightBar = () => {
  const { visibility } = useContext(AppContext);

  return (
    <Wrapper>
      <UserButton />
      {visibility.mainButton && <MainButton />}
      {visibility.calendarButton && <CalendarButton />}
      <Logout />
    </Wrapper>
  );
};

export default RightBar;
