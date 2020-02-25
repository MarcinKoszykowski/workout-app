import React from 'react';
import styled from 'styled-components';
import { purple, colorWithOpacity } from 'styled/colors';
import SportsNavigation from './organisms/SportsNavigation';

const Wrapper = styled.div`
  position: fixed;
  padding: 20px 0;
  top: 0;
  bottom: 0;
  width: 160px;
  background-color: ${colorWithOpacity(purple, 0.8)};
  z-index: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 992px) {
    width: 145px;
    padding: 15px 0;
  }

  @media screen and (max-width: 768px) {
    width: 130px;
    padding: 10px 0;
  }

  @media screen and (max-width: 576px) {
    width: 105px;
  }

  @media screen and (max-width: 420px) {
    width: 90px;
  }
`;

const LeftBar = () => (
  <Wrapper>
    <SportsNavigation />
  </Wrapper>
);

export default LeftBar;
