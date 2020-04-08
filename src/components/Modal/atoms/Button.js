import styled from 'styled-components';

const Button = styled.div`
  height: 60px;
  width: 60px;
  margin: auto;
  background-color: ${({ buttonColor }) => buttonColor};
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: 35%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.2s ease;

  @media screen and (min-width: 1024px) {
    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      opacity: 0.7;
    }
  }
`;

export default Button;
