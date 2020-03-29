import React from 'react';
import styled from 'styled-components';
import animations from 'styled/animations';
import { colorWithOpacity, white, purple } from 'styled/colors';

const LoaderRing = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: ${colorWithOpacity(white, 0.8)};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 10vw;
    height: 10vw;
    border: 1vw solid ${purple};
    border-radius: 50%;
    animation: ${animations.loader} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${purple} transparent transparent transparent;
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
