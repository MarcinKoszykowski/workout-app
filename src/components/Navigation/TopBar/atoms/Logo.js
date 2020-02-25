import styled from 'styled-components';

const Logo = styled.img`
  height: 20px;
  transform: translateY(2px);

  @media screen and (max-width: 992px) {
    height: 15px;
    transform: translateY(1px);
  }
`;

export default Logo;
