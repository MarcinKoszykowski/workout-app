import React from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';
import animations from 'styled/animations';

const LoaderRing = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;

  div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    border: 15px solid ${colorWithOpacity(white, 0.9)};
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

  @media screen and (max-width: 992px) {
    width: 85px;
    height: 85px;

    div {
      border-width: 12.5px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 65px;
    height: 65px;

    div {
      border-width: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    width: 55px;
    height: 55px;

    div {
      border-width: 8px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 40px;
    height: 40px;

    div {
      border-width: 6px;
    }
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
