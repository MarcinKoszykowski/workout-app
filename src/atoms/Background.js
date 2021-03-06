import styled from 'styled-components';
import animations from 'styled/animations';
import { colorWithOpacity, purple } from 'styled/colors';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${animations.opacityZeroToOne} 0.5s ease;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorWithOpacity(purple, 0.5)};
  }
`;

export default Background;
