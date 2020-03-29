import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Training from './organisms/Training';
import SportForm from './organisms/SportForm';
import Title from './atoms/Title';

const Wrapper = styled.div`
  padding: 40px 180px 0 230px;
  min-width: 225px;
  z-index: 10;

  @media screen and (max-width: 992px) {
    padding: 45px 150px 0 200px;
  }

  @media screen and (max-width: 768px) {
    padding: 115px 30px 0 170px;
  }

  @media screen and (max-width: 576px) {
    padding: 100px 15px 0 115px;
  }

  @media screen and (max-width: 420px) {
    padding: 92.5px 10px 0 85px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sport = ({ title }) => (
  <Wrapper>
    <TopWrapper>
      <Title>{title}</Title>
      <SportForm />
    </TopWrapper>
    <Training />
  </Wrapper>
);

Sport.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Sport;
