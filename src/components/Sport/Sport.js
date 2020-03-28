import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './atoms/Title';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-left: 230px;
  z-index: 10;

  @media screen and (max-width: 992px) {
    padding-top: 45px;
    padding-left: 200px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 170px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 100px;
    padding-left: 145px;
  }

  @media screen and (max-width: 420px) {
    padding-top: 80px;
    padding-left: 120px;
  }
`;

const Sport = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

Sport.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Sport;
