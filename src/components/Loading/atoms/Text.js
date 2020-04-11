import styled from 'styled-components';
import { colorWithOpacity, white } from 'styled/colors';

const Text = styled.h1`
  width: 100%;
  margin-bottom: 60px;
  font-size: 4.5rem;
  text-transform: uppercase;
  color: ${colorWithOpacity(white, 0.9)};

  @media screen and (max-width: 992px) {
    margin-bottom: 50px;
    font-size: 3.8rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 3.3rem;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 25px;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    font-size: 2rem;
  }
`;

export default Text;
