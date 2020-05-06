import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { blue, lightRed, green } from 'styled/colors';
import { changePassword } from 'data/value';
import { removeWhitespace, functionWithTimeout } from 'helpers/functions';
import FormInput from 'components/Login/molecules/FormInput';
import { useDidMount, useWillUnmount } from 'beautiful-react-hooks';
import getDataFromAPI from 'helpers/api_functions';
import { user as userRoute } from 'data/api_routes';
import AppContext from 'context';
import md5 from 'md5';
import Button from '../atoms/Button';

const Form = styled.form`
  position: relative;
  margin: auto;
  width: 100%;
  padding: 25px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 22.5px 0 17.5px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 0 15px;
  }
`;

const InfoText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 30px;
  padding: 0 20px;
  color: ${({ errorText }) => (errorText ? lightRed : green)};

  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const FormButton = styled(Button)`
  margin-top: 40px;
  background-color: ${blue};
  border-color: ${blue};

  @media screen and (min-width: 1024px) {
    &:hover {
      color: ${blue};
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      color: ${blue};
    }
  }

  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 20px;
  }
`;

const ChangePasswordForm = () => {
  const { user, setErrorBar, setUser } = useContext(AppContext);
  const {
    button,
    form: { password, newPassword, confirm },
    infoText,
  } = changePassword;
  const [formNewPassword, setFormNewPassword] = useState({
    password: '',
    newPassword: '',
    confirm: '',
  });
  const [passwordType, setPasswordType] = useState(true);
  const [newPasswordType, setNewPasswordType] = useState(true);
  const [confirmType, setConfirmType] = useState(true);
  const [error, setError] = useState({
    text: infoText.confirmation,
    visibility: false,
    error: false,
  });

  const formRef = useRef();

  const setPasswordTypeVisibility = (func, value) => func(!value);
  const handleInputChange = (e) => {
    const value = {
      ...formNewPassword,
      [e.target.name]: removeWhitespace(e.target.value),
    };
    setFormNewPassword(value);
  };

  const errorTextFunction = (errorText, bool) => {
    functionWithTimeout(
      setError,
      {
        visibility: true,
        text: errorText,
        error: bool,
      },
      {
        visibility: false,
        text: errorText,
        error: bool,
      },
      3000,
    );
  };
  const errorFunctions = (errorText) =>
    functionWithTimeout(
      setErrorBar,
      { visibility: true, text: errorText },
      { visibility: false, text: '' },
      3000,
    );

  const passwordComparison = () => {
    if (formNewPassword.newPassword !== formNewPassword.confirm) {
      errorTextFunction(infoText.confirmation, true);
      return false;
    }
    return true;
  };

  const checkStatus = (data) => {
    const { status } = data;

    if (status === 1) {
      errorTextFunction(infoText.change, false);
      setUser((prevState) => ({
        ...prevState,
        password: md5(formNewPassword.newPassword),
      }));
      localStorage.setItem('userPassword', md5(formNewPassword.newPassword));
    } else if (status === 2 || status === 4) {
      errorFunctions(infoText.error);
    } else if (status === 3) {
      errorTextFunction(infoText.password, true);
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    if (passwordComparison()) {
      getDataFromAPI(
        userRoute.editPassword,
        {
          userId: user._id,
          data: {
            password: md5(formNewPassword.password),
            newPassword: md5(formNewPassword.newPassword),
          },
        },
        checkStatus,
        () => errorFunctions(infoText.error),
        localStorage.getItem('userToken'),
      );
    }
  };

  useDidMount(() => {
    if (formRef.current) {
      formRef.current.addEventListener('invalid', (e) => e.preventDefault(), true);
    }
  });

  useWillUnmount(() => {
    formRef.current.removeEventListener('invalid', (e) => e.preventDefault(), true);
  });

  return (
    <>
      {error.visibility && <InfoText errorText={error.error}>{error.text}</InfoText>}
      <Form ref={formRef} autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formNewPassword.password}
          eyeOnClick={() => setPasswordTypeVisibility(setPasswordType, passwordType)}
          type={passwordType ? password.type : null}
          name={password.name}
          label={password.name}
          slash={passwordType}
          userPanel
          password
        />
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formNewPassword.newPassword}
          eyeOnClick={() => setPasswordTypeVisibility(setNewPasswordType, newPasswordType)}
          type={newPasswordType ? newPassword.type : null}
          name={newPassword.name}
          label={newPassword.label}
          slash={newPasswordType}
          errorText={newPassword.errorText}
          userPanel
          password
        />
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formNewPassword.confirm}
          eyeOnClick={() => setPasswordTypeVisibility(setConfirmType, confirmType)}
          type={confirmType ? confirm.type : null}
          name={confirm.name}
          label={confirm.name}
          slash={confirmType}
          userPanel
          password
        />
        <FormButton>{button}</FormButton>
      </Form>
    </>
  );
};

export default ChangePasswordForm;
