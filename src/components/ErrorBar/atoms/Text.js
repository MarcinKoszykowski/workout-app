import styled from 'styled-components';
import { colorWithOpacity, lightRed, white } from 'styled/colors';

const Text = styled.span`
  display: inline-block;
  background-color: ${colorWithOpacity(lightRed, 0.7)};
  padding: 15px 30px;
  width: 60%;
  font-size: 2rem;
  color: ${white};
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 992px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    padding: 12.5px 0;
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.3rem;
    padding: 10px 0;
  }

  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

export default Text;
