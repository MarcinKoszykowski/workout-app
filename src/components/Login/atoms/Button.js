import styled from 'styled-components';
import { purple, lightGrey, colorWithOpacity } from 'styled/colors';

const Button = styled.button`
  padding: 10px;
  width: 200px;
  text-align: center;
  background-color: ${purple};
  border: 1.5px ${purple} solid;
  color: ${lightGrey};
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: capitalize;

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: transparent;
      color: ${purple};
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      background-color: transparent;
      color: ${purple};
    }
  }

  @media screen and (max-width: 768px) {
    background-color: transparent;
    border-color: ${lightGrey};
    color: ${lightGrey};

    &:active {
      background-color: ${colorWithOpacity(lightGrey, 0.2)};
      color: ${lightGrey};
    }
  }
`;

export default Button;
