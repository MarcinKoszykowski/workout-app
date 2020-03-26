import styled from 'styled-components';
import icon from 'assets/icons/times-solid.svg';
import { lightRed, colorWithOpacity } from 'styled/colors';

const ExitButton = styled.div`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  background: url(${icon}) no-repeat center center;
  background-color: ${lightRed};
  border: 3px solid ${lightRed};
  background-size: 45%;
  border-radius: 50%;
  transition: transform 0.2s ease;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    &:hover {
      transform: rotate(180deg);
    }

    &:active {
      background-color: ${colorWithOpacity(lightRed, 0.5)};
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      transform: rotate(180deg);
    }
  }

  @media screen and (max-width: 420px) {
    width: 30px;
    height: 30px;
    background-size: 50%;
  }
`;

export default ExitButton;
