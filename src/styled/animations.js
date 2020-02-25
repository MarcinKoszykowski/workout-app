import { keyframes } from 'styled-components';

const animations = {
  opacityZeroToOne: keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
  `,
  loader: keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  `,
};

export default animations;
