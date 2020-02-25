import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { main } from 'data/routes';
import logoImg from 'assets/images/logo.png';
import Title from '../atoms/Title';
import Logo from '../atoms/Logo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TitleBox = () => (
  <Link to={main}>
    <Wrapper>
      <Title>WoRkAut App</Title>
      <Logo src={logoImg} />
    </Wrapper>
  </Link>
);

export default TitleBox;
