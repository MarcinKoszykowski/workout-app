import React from 'react';
import styled from 'styled-components';
import { colorWithOpacity, purple } from 'styled/colors';
import UserNavigation from './molecules/UserNavigation';
import Logout from './molecules/Logout';
import DateInfo from './molecules/DateInfo';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 175px;
  padding-right: 45px;
  padding-left: 40px;
  top: 0;
  left: 160px;
  right: 0;
  height: 70px;
  background-color: ${colorWithOpacity(purple, 0.6)};
  z-index: 1;

  @media screen and (max-width: 992px) {
    left: 145px;
    height: 65px;
    padding-right: 35px;
    padding-left: 30px;
  }

  @media screen and (max-width: 768px) {
    left: 130px;
    height: 55px;
    padding-right: 25px;
    padding-left: 20px;
  }

  @media screen and (max-width: 576px) {
    left: 105px;
    height: 50px;
    padding: 0 15px;
  }

  @media screen and (max-width: 420px) {
    left: 85px;
    padding: 0 20px;
  }
`;

const TopBar = () => (
  <Wrapper>
    <UserNavigation />
    <DateInfo />
    <Logout />
  </Wrapper>
);

export default TopBar;
