import styled from 'styled-components';
import animations from 'styled/animations';
import { colorWithOpacity, black } from 'styled/colors';

const CoverBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colorWithOpacity(black, 0.5)};
  animation: ${animations.opacityZeroToOne} 0.5s ease;
  z-index: 4;
`;

export default CoverBackground;
