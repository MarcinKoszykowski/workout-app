import styled from 'styled-components';
import { colorWithOpacity, black } from 'styled/colors';

const Text = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 7.5px 15px 10px;
  text-transform: uppercase;
  color: ${colorWithOpacity(black, 0.8)};

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
    margin: 7.5px 12.5px 10px;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

export default Text;
