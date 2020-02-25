import React from 'react';
import styled from 'styled-components';
import Background from 'components/Login/Background';
import Form from 'components/Login/Form';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  min-height: 500px;
`;

const LoginView = () => (
  <Wrapper>
    <Background />
    <Form />
  </Wrapper>
);

export default LoginView;
