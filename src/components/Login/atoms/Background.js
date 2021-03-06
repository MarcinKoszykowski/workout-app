import styled from 'styled-components';
import animations from 'styled/animations';
import { purple, colorWithOpacity } from 'styled/colors';
import backgroundImage from 'assets/images/background.jpg';

const Background = styled.div`
  position: relative;
  flex: 1;
  background: url(${backgroundImage}) no-repeat left;
  background-size: cover;
  animation: ${animations.opacityZeroToOne} 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorWithOpacity(purple, 0.3)};
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    flex: 0;
  }
`;

export default Background;
