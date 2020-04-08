import styled from 'styled-components';
import { green, colorWithOpacity } from 'styled/colors';
import icon from 'assets/icons/times.svg';

const FormButton = styled.button`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  background: url(${icon}) no-repeat center center;
  background-color: ${green};
  background-size: 45%;
  border-radius: 50%;
  transform: rotate(45deg);
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${colorWithOpacity(green, 0.8)};
    }

    &:active {
      background-color: ${green};
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      background-color: ${colorWithOpacity(green, 0.8)};
    }
  }

  @media screen and (max-width: 992px) {
    width: 22.5px;
    height: 22.5px;
    background-size: 40%;
  }

  @media screen and (max-width: 576px) {
    width: 17.5px;
    height: 17.5px;
  }

  @media screen and (max-width: 420px) {
    width: 15px;
    height: 15px;
  }
`;

export default FormButton;
