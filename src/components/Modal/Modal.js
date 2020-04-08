import React, { useContext, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import animations from 'styled/animations';
import { white, colorWithOpacity } from 'styled/colors';
import DeleteButton from './molecules/DeleteButton';
import Text from './atoms/Text';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 25px 20px 20px;
  background-color: ${colorWithOpacity(white, 0.6)};
  transform: translate(-50%, -50%);
  border-radius: 5px;
  animation: ${animations.opacityZeroToOne} 0.5s ease;
  z-index: 5;

  @media screen and (max-width: 576px) {
    padding: 22.5px 17.5px 17.5px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 15px 15px;
  }
`;

const Modal = () => {
  const { visibility, setVisibility } = useContext(AppContext);
  const modalRef = useRef(null);

  const clickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target) && visibility.modal) {
      setVisibility((prevState) => ({ ...prevState, modal: false }));
      document.removeEventListener('click', clickOutside);
    }
  };

  const removeClickOutside = () => {
    document.removeEventListener('click', clickOutside);
  };

  const callbackClickOutside = useCallback(clickOutside, [visibility.modal]);
  const callbackRemoveClickOutside = useCallback(removeClickOutside, [visibility.modal]);

  useEffect(() => {
    document.addEventListener('click', callbackClickOutside);

    return () => {
      callbackRemoveClickOutside();
    };
  }, [callbackClickOutside, callbackRemoveClickOutside]);

  return (
    visibility.modal && (
      <Wrapper ref={modalRef}>
        <DeleteButton />
        <Text>delete item</Text>
      </Wrapper>
    )
  );
};

export default Modal;
