import styled from 'styled-components';

const Icon = styled.div`
  height: 90px;
  width: 90px;
  background: ${({ icon }) => `url(${icon})`} no-repeat center;
  background-size: contain;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 992px) {
    height: 80px;
    width: 80px;
  }

  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
  }

  @media screen and (max-width: 576px) {
    height: 55px;
    width: 55px;
  }

  @media screen and (max-width: 420px) {
    height: 40px;
    width: 40px;
  }
`;

export default Icon;
