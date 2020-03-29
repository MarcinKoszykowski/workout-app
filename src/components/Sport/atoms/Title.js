import styled from 'styled-components';
import { white, blue, colorWithOpacity } from 'styled/colors';

const Title = styled.h2`
  font-size: 2.6rem;
  padding: 0 10px;
  display: inline-block;
  color: ${white};
  text-transform: uppercase;
  background-color: ${colorWithOpacity(white, 0.2)};
  border-bottom: 4px solid ${blue};

  @media screen and (max-width: 992px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
    padding: 0 8px;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.55rem;
    padding: 0 5px;
    border-bottom: 3px solid ${blue};
  }

  @media screen and (max-width: 420px) {
    font-size: 1.1rem;
  }
`;

export default Title;
