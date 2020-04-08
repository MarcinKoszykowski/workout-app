import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import animations from 'styled/animations';
import { white, colorWithOpacity } from 'styled/colors';
import CoverBackground from 'atoms/CoverBackground';
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

const Modal = () => {
  const { visibility } = useContext(AppContext);

  return (
    visibility.modal && (
      <>
        <CoverBackground />
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
