import styled from 'styled-components';
import logoImage from 'assets/images/logo.png';
import { white } from 'styled/colors';

const MainButton = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 75px;
  height: 75px;
  background-color: ${white};
  background-image: url(${logoImage});
  background-size: 90%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  z-index: 1;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 992px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    right: 10px;
    bottom: 10px;
    width: 65px;
    height: 65px;
  }

  @media screen and (max-width: 576px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 420px) {
    width: 55px;
    height: 55px;
  }
`;

export default MainButton;
