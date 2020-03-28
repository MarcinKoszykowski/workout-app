import styled from 'styled-components';
import { colorWithOpacity } from 'styled/colors';

const Button = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${({ buttonColor }) => buttonColor};
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: 45%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: ${({ buttonColor }) => `5px solid ${buttonColor}`};
  z-index: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${({ buttonColor }) => colorWithOpacity(buttonColor, 0.4)};
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      background-color: ${({ buttonColor }) => colorWithOpacity(buttonColor, 0.4)};
    }
  }

  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
    border-width: 4px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
    width: 50px;
    border-width: 3px;
  }

  @media screen and (max-width: 420px) {
    height: 40px;
    width: 40px;
  }
`;

export default Button;
