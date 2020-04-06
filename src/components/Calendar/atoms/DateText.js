import styled from 'styled-components';
import { purple, white, colorWithOpacity } from 'styled/colors';

const DateText = styled.p`
  font-size: 1.2rem;
  color: ${colorWithOpacity(white, 0.7)};
  margin-bottom: 3px;
  padding: 0 0 2.5px 10px;
  border-bottom: 3px solid ${purple};

  @media screen and (max-width: 992px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.9rem;
    border-width: 2px;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

export default DateText;
