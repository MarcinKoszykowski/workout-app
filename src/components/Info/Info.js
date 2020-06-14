import React from 'react';
import styled from 'styled-components';
import { info } from 'data/value';
import { green, orange, red } from 'styled/colors';
import Title from './atoms/Title';
import Text from './atoms/Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 75px 140px 0 180px;

  @media screen and (max-width: 992px) {
    margin-right: 120px;
    margin-left: 160px;
  }

  @media screen and (max-width: 768px) {
    margin: 140px 0 0 140px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 130px;
    margin-left: 100px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 120px;
    margin-left: 75px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
  margin: -60px auto 40px;

  @media screen and (max-width: 1200px) {
    margin-top: -50px;
    width: 490px;
  }

  @media screen and (max-width: 992px) {
    margin-top: -40px;
    margin-bottom: 35px;
    width: 390px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -30px;
    margin-bottom: 25px;
    width: 320px;
  }

  @media screen and (max-width: 576px) {
    margin-top: -20px;
    margin-bottom: 15px;
    width: 260px;
  }

  @media screen and (max-width: 420px) {
    margin-top: -15px;
    margin-bottom: 10px;
    width: 190px;
  }
`;

const Span = styled.span`
  font-size: 3rem;
  color: ${({ color }) => color};
  text-transform: uppercase;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 992px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

const Info = () => {
  const {
    title,
    info: { sport, intensity, life },
    intensity: { low, normal, high },
  } = info;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{sport}</Text>
      <Text>{intensity}</Text>
      <Box>
        <Span color={green}>{low}</Span>
        <Span color={orange}>{normal}</Span>
        <Span color={red}>{high}</Span>
      </Box>
      <Text>{life}</Text>
    </Wrapper>
  );
};

export default Info;
