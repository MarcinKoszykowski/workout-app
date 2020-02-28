import styled from 'styled-components';

const Icon = styled.div`
  height: 80px;
  width: 80px;
  background: ${({ icon }) => `url(${icon})`} no-repeat center;
  background-size: contain;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 992px) {
    height: 70px;
    width: 70px;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 420px) {
    height: 40px;
    width: 40px;
  }
`;

export default Icon;
