import styled from 'styled-components';
import { white } from 'styled/colors';

const Text = styled.h3`
  color: ${white};
  margin: 0 auto 60px;
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

export default Text;
