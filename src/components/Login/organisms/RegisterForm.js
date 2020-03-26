import React, { useState } from 'react';
import styled from 'styled-components';
import md5 from 'md5';
import { register } from 'data/value';
import { user as userRoute } from 'data/api_routes';
import { getDataFromApi } from 'data/functions';
import { colorWithOpacity, red, lightGrey, green } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const FormBox = styled.form`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormButton = styled(Button)`
  margin-top: 50px;
`;

const Info = styled.div`
  margin-bottom: 15px;
  height: 20px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ color }) => color};
  opacity: ${({ isVisibility }) => (isVisibility ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 5px 0;
    color: ${colorWithOpacity(red, 0.8)};
    background-color: ${colorWithOpacity(lightGrey, 0.8)};
  }
`;

const RegisterForm = () => {
  const {
    button: { register: registerButton },
    form: { email, password, confirm },
    infoText: { confirmation, error, email: emailInfoText, register: registerInfoText },
  } = register;

  const [passwordType, setPasswordType] = useState(true);
  const [confirmType, setConfirmType] = useState(true);
  const [formNewUser, setFormNewUser] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [textIsVisible, setTextIsVisible] = useState(false);
  const [infoText, setInfoText] = useState(registerInfoText);

  const handleInputChange = (e) => {
    const value = {
      ...formNewUser,
      [e.target.name]: e.target.value,
    };
    setFormNewUser(value);
  };

  const handleTextIsVisible = () => {
    setTextIsVisible(true);
    setTimeout(() => setTextIsVisible(false), 4000);
  };

  const handleStatus = (text) => {
    handleTextIsVisible();
    setInfoText(text);
  };

  const checkConfirmation = () => {
    return formNewUser.password !== formNewUser.confirm;
  };

  const checkStatus = (data) => {
    const { status } = data;

    if (status === 1) {
      handleStatus(registerInfoText);
    } else if (status === 2) {
      handleStatus(emailInfoText);
    } else if (status === 3) {
      handleStatus(error);
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    if (checkConfirmation()) {
      handleStatus(confirmation);
    } else {
      getDataFromApi(
        userRoute.register,
        {
          email: formNewUser.email,
          password: md5(formNewUser.password),
        },
        checkStatus,
        () => handleStatus(error),
      );
    }
  };

  const setPasswordVisibility = () => setPasswordType(!passwordType);
  const setConfirmVisibility = () => setConfirmType(!confirmType);

  return (
    <Wrapper>
      <Info color={infoText === registerInfoText ? green : red} isVisibility={textIsVisible}>
        {infoText}
      </Info>
      <FormBox autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
        <FormInput
          onChange={(e) => handleInputChange(e)}
          type={email.type}
          value={formNewUser.email}
          name={email.name}
          label={email.name}
        />
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formNewUser.password}
          eyeOnClick={setPasswordVisibility}
          type={passwordType ? password.type : null}
          name={password.name}
          label={password.name}
          slash={passwordType}
          pattern={password.pattern}
          password
        />
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formNewUser.confirm}
          eyeOnClick={setConfirmVisibility}
          type={confirmType ? confirm.type : null}
          name={confirm.name}
          label={confirm.name}
          slash={confirmType}
          password
        />
        <FormButton>{registerButton}</FormButton>
      </FormBox>
    </Wrapper>
  );
};

export default RegisterForm;
