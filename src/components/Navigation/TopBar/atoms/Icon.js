import styled from 'styled-components';

const Icon = styled.div`
  height: 25px;
  width: 25px;
  background: ${({ icon }) => `url(${icon})`} no-repeat center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

  @media screen and (max-width: 576px) {
    height: 15px;
    width: 15px;
  }

  @media screen and (max-width: 420px) {
    height: 25px;
    width: 25px;
  }
`;

export default Icon;
