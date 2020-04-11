import React from 'react';
import styled from 'styled-components';
import animations from 'styled/animations';
import { white } from 'styled/colors';

const LoaderRing = styled.div`
  display: flex;
  justify-content: center;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 10vw;
    height: 10vw;
    border: 1vw solid ${white};
    border-radius: 50%;
    animation: ${animations.loader} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${white} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loader = () => (
  <LoaderRing>
    <div />
    <div />
    <div />
  </LoaderRing>
);

export default Loader;
