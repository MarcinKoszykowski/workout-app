import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import animations from 'styled/animations';
import { white, colorWithOpacity, black } from 'styled/colors';
import DeleteButton from './molecules/DeleteButton';
import ExitButton from './molecules/ExitButton';
import Text from './atoms/Text';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${colorWithOpacity(white, 0.6)};
  transform: translate(-50%, -50%);
  border-radius: 5px;
  animation: ${animations.opacityZeroToOne} 0.5s ease;
  z-index: 5;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colorWithOpacity(black, 0.5)};
  animation: ${animations.opacityZeroToOne} 0.5s ease;
  z-index: 4;
`;

const Modal = () => {
  const { visibility } = useContext(AppContext);

  return (
    visibility.modal && (
      <>
        <Background />
        <Wrapper>
          <ExitButton />
          <DeleteButton />
          <Text>delete item</Text>
        </Wrapper>
      </>
    )
  );
};

export default Modal;
