import styled from 'styled-components';
import { white } from 'styled/colors';

const Title = styled.p`
  color: ${white};
  font-family: 'Major Mono Display';
  font-size: 2rem;
  margin-right: 15px;
  transition: margin 0.3s ease;

  @media screen and (max-width: 992px) {
    font-size: 1.6rem;
    margin-right: 12.5px;
  }
`;

export default Title;
