import styled from 'styled-components';
import backgroundImage from 'assets/images/background.jpg';
import { purple } from 'styled/colors';

const Background = styled.div`
  position: relative;
  flex: 1;
  background: url(${backgroundImage}) no-repeat left;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${purple};
    opacity: 0.3;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    flex: 0;
  }
`;

export default Background;
