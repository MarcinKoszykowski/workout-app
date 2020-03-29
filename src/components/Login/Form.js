import React, { useState } from 'react';
import styled from 'styled-components';
import { login, register } from 'data/value';
import { black, colorWithOpacity, lightGrey } from 'styled/colors';
import LoginForm from './organisms/LoginForm';
import RegisterForm from './organisms/RegisterForm';
import Button from './atoms/Button';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 600px;
  background-color: ${lightGrey};
  box-shadow: -10px 0 35px 0 ${colorWithOpacity(black, 0.7)};

  @media screen and (min-width: 1800px) {
    max-width: 700px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 500px;
  }

  @media screen and (max-width: 992px) {
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    max-width: none;
    box-shadow: none;
    background-color: transparent;
    margin-top: -50px;
  }
`;

const Box = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const Form = () => {
  const {
    button: { register: registerButton },
  } = login;

  const {
    button: { login: backToLogin },
  } = register;

  const [formType, setFormType] = useState(true);

  const handleButtonOnClick = () => setFormType(!formType);

  return (
    <Wrapper>
      <Box>
        {formType ? <LoginForm /> : <RegisterForm />}
        <StyledButton onClick={handleButtonOnClick}>
          {formType ? registerButton : backToLogin}
        </StyledButton>
      </Box>
    </Wrapper>
  );
};

export default Form;
