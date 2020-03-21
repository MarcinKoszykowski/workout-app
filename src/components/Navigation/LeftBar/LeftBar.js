import React from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white, black } from 'styled/colors';
import SportsNavigation from './organisms/SportsNavigation';

const Wrapper = styled.div`
  position: fixed;
  padding: 20px 0;
  top: 0;
  bottom: 0;
  width: 180px;
  background-color: ${white};
  z-index: 1;
  overflow-y: scroll;
  box-shadow: 10px 0 35px 0 ${colorWithOpacity(black, 0.7)};

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 992px) {
    width: 160px;
  }

  @media screen and (max-width: 768px) {
    width: 140px;
  }

  @media screen and (max-width: 576px) {
    width: 120px;
    padding: 15px 0;
  }

  @media screen and (max-width: 420px) {
    width: 100px;
  }
`;

const LeftBar = () => (
  <Wrapper>
    <SportsNavigation />
  </Wrapper>
);

export default LeftBar;
