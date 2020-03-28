import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorWithOpacity, white, blue } from 'styled/colors';
import Title from './atoms/Title';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-left: 230px;
  min-width: 225px;
  z-index: 10;

  @media screen and (max-width: 992px) {
    padding-top: 45px;
    padding-left: 200px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 170px;
    padding-top: 115px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 95px;
    padding-left: 115px;
  }

  @media screen and (max-width: 420px) {
    padding-top: 85px;
    padding-left: 85px;
  }
`;

const Box = styled.div`
  position: fixed;
  top: 120px;
  bottom: 30px;
  left: 230px;
  right: 180px;
  min-width: 225px;
  background-color: ${colorWithOpacity(white, 0.4)};

  @media screen and (max-width: 992px) {
    top: 115px;
    left: 200px;
    right: 170px;
  }

  @media screen and (max-width: 768px) {
    top: 170px;
    left: 170px;
    right: 30px;
    bottom: 20px;
  }

  @media screen and (max-width: 576px) {
    top: 140px;
    left: 115px;
    right: 15px;
    bottom: 15px;
  }

  @media screen and (max-width: 420px) {
    top: 122.5px;
    left: 85px;
    right: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 25%;
    top: 50%;
    left: 0;
    bottom: 0;
    border-left: 3px solid ${blue};
    border-bottom: 3px solid ${blue};
  }

  &::before {
    content: '';
    position: absolute;
    width: 25%;
    top: 0;
    right: 0;
    bottom: 50%;
    border-right: 3px solid ${blue};
    border-top: 3px solid ${blue};
  }
`;

const Sport = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Box />
    </Wrapper>
  );
};

Sport.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Sport;
