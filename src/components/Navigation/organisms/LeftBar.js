import React from 'react';
import styled from 'styled-components';
import sports from 'data/sports';
import { colorWithOpacity, white, black, lightGrey, blue } from 'styled/colors';
import SportIcon from '../molecules/SportIcon';

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

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${colorWithOpacity(black, 0.1)};
    background-color: ${lightGrey};
  }

  &::-webkit-scrollbar {
    width: 12.5px;
    background-color: ${lightGrey};

    @media screen and (max-width: 576px) {
      width: 10px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorWithOpacity(blue, 0.7)};
    border: 1px solid ${colorWithOpacity(blue, 0.7)};
    border-radius: 2px;
  }

  @media screen and (max-width: 992px) {
    width: 160px;
  }

  @media screen and (max-width: 768px) {
    width: 140px;
  }

  @media screen and (max-width: 576px) {
    width: 100px;
    padding: 15px 0;
  }

  @media screen and (max-width: 420px) {
    width: 75px;
  }
`;

const SportIconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LeftBar = () => (
  <Wrapper>
    <SportIconWrapper>
      {sports.map((sport) => (
        <SportIcon sport={sport} key={sport.name} />
      ))}
    </SportIconWrapper>
  </Wrapper>
);

export default LeftBar;
