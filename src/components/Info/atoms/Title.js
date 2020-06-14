import styled from 'styled-components';
import { white, blue } from 'styled/colors';

const Title = styled.h1`
  position: relative;
  color: ${white};
  margin: 0 auto 130px;
  font-size: 5.5rem;
  text-transform: uppercase;

  @media screen and (max-width: 1200px) {
    font-size: 4.5rem;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 992px) {
    font-size: 3.5rem;
    margin-bottom: 110px;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 576px) {
    font-size: 2.5rem;
    margin-bottom: 90px;
  }

  @media screen and (max-width: 420px) {
    font-size: 2rem;
    margin-bottom: 80px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 45%;
  }

  &::after {
    top: 60%;
    right: -4%;
    bottom: 0;
    border-right: 4px solid ${blue};
    border-bottom: 4px solid ${blue};
  }

  &::before {
    top: 0;
    left: -4%;
    bottom: 60%;
    border-left: 4px solid ${blue};
    border-top: 4px solid ${blue};
  }

  @media screen and (max-width: 992px) {
    &::after,
    &::before {
      border-width: 3px;
    }
  }

  @media screen and (max-width: 420px) {
    &::after,
    &::before {
      border-width: 2px;
    }
  }
`;

export default Title;
