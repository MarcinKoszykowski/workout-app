import styled from 'styled-components';
import { purple } from 'styled/colors';

const Text = styled.span`
  flex: 1;
  text-align: center;
  font-size: 1.2rem;
  color: ${purple};
  margin-right: 10px;

  &:last-child {
    margin-right: 0px;
  }

  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.725rem;
    margin-right: 8px;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
    margin-right: 5px;
  }
`;

export default Text;
