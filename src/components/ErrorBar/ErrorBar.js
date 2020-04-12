import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Text from './atoms/Text';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 40%;
  left: 0;
  right: 0;
  z-index: 99;
  min-width: 300px;

  @media screen and (max-width: 576px) {
    top: 30%;
  }
`;

const ErrorBar = () => {
  const { errorBar } = useContext(AppContext);

  return (
    errorBar.visibility && (
      <Wrapper>
        <Text>{errorBar.text}</Text>
      </Wrapper>
    )
  );
};

export default ErrorBar;
