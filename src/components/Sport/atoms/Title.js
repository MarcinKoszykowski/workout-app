import styled from 'styled-components';
import { white, blue, colorWithOpacity } from 'styled/colors';

const Title = styled.h2`
  font-size: 2.5rem;
  margin-top: auto;
  padding: 0 10px;
  display: inline-block;
  color: ${white};
  text-transform: uppercase;
  background-color: ${colorWithOpacity(white, 0.2)};
  border-bottom: 4px solid ${blue};

  @media screen and (max-width: 992px) {
    font-size: 1.9rem;
    padding: 0 8px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0 6px;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
    padding: 0 4px;
    border-bottom: 3px solid ${blue};
  }

  @media screen and (max-width: 420px) {
    font-size: 0.95rem;
  }
`;

export default Title;
