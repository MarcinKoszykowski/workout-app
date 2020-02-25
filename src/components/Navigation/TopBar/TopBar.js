import React from 'react';
import styled from 'styled-components';
import { colorWithOpacity, purple } from 'styled/colors';
import UserNavigation from './molecules/UserNavigation';
import TitleBox from './molecules/TitleBox';

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
  height: 80px;
  background-color: ${colorWithOpacity(purple, 0.8)};
  z-index: 1;

  @media screen and (max-width: 992px) {
    left: 145px;
    height: 70px;
    padding-right: 35px;
    padding-left: 30px;
  }

  @media screen and (max-width: 768px) {
    left: 130px;
    height: 60px;
    padding-right: 25px;
    padding-left: 20px;
  }

  @media screen and (max-width: 576px) {
    left: 105px;
    height: 50px;
    padding: 0 15px;
  }

  @media screen and (max-width: 420px) {
    left: 90px;
    padding: 0 25px;
  }
`;

const TopBar = () => (
  <Wrapper>
    <TitleBox />
    <UserNavigation />
  </Wrapper>
);

export default TopBar;
