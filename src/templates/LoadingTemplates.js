import React from 'react';
import styled from 'styled-components';
import { purple } from 'styled/colors';
import Loading from 'components/Loading/Loading';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  text-align: center;
  min-width: 320px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${purple};
  z-index: 999;
`;

const LoadingTemplates = () => (
  <Wrapper>
    <Loading />
  </Wrapper>
);

export default LoadingTemplates;
