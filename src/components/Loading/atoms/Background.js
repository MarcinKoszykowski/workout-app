import styled from 'styled-components';
import backgroundImage from 'assets/images/background-low.jpg';
import { colorWithOpacity, purple } from 'styled/colors';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorWithOpacity(purple, 0.7)};
    z-index: 1;
  }
`;

export default Background;
