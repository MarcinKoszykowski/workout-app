import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { app } from 'data/value';
import { main } from 'data/routes';
import { white, orange, blue, colorWithOpacity } from 'styled/colors';
import mainImage from 'assets/images/main.jpg';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';

const StyledWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledBackground = styled(Background)`
  background-position: top left;
`;

const Text = styled.p`
  font-size: 13rem;
  padding-top: 20vh;
  text-transform: uppercase;
  color: ${orange};

  @media screen and (max-width: 768px) {
    padding-top: 25vh;
    font-size: 9.7rem;
  }

  @media screen and (max-width: 420px) {
    padding-top: 30vh;
    font-size: 6.8rem;
  }
`;

const SubText = styled.p`
  font-size: 2.8rem;
  margin-top: -50px;
  text-transform: uppercase;
  color: ${white};

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
    margin-top: -40px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
    margin-top: -22.5px;
  }
`;

const Button = styled.div`
  display: inline-block;
  margin-top: 50px;
  padding: 7.5px 12.5px 10px;
  color: ${blue};
  border: 3px solid ${blue};
  background-color: ${colorWithOpacity(blue, 0.1)};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  transition: opacity 0.3s ease;

  @media screen and (min-width: 1024px) {
    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    font-size: 1.3rem;
    padding: 5px 10px 7.5px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 25px;
    font-size: 1rem;
  }
`;

const NotFoundView = () => {
  const history = useHistory();

  const buttonOnClick = () => {
    history.push(main);
  };

  return (
    <StyledWrapper>
      <StyledBackground image={mainImage} />
      <Text>{app[404].text}</Text>
      <SubText>{app[404].sub}</SubText>
      <Button onClick={buttonOnClick}>go to main page</Button>
    </StyledWrapper>
  );
};
export default NotFoundView;
