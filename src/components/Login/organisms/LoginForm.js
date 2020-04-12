import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import md5 from 'md5';
import AppContext from 'context';
import getDataFromAPI from 'helpers/api_functions';
import { calculateBMI, removeWhitespace } from 'helpers/functions';
import {
  setDetailsInLocalStorage,
  setBMIInLocalStorage,
  setUserInLocalStorage,
  setTokenInLocalStorage,
} from 'helpers/local_storage_functions';
import { user as userRoute, details as detailsRoute } from 'data/api_routes';
import { main } from 'data/routes';
import { login, app } from 'data/value';
import { colorWithOpacity, lightGrey, red } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

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
  color: ${red};
  opacity: ${({ isVisibility }) => (isVisibility ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 5px 0;
    color: ${colorWithOpacity(red, 0.8)};
    background-color: ${colorWithOpacity(lightGrey, 0.8)};
  }
`;

const LoginForm = () => {
  const {
    button: { login: loginButton },
    form: { email, password },
    infoText: { incorrect, error },
  } = login;

  const { setToken, setUser, setErrorBar, setUserDetails, setLoading, setIsLogged } = useContext(
    AppContext,
  );
  const history = useHistory();

  const [passwordType, setPasswordType] = useState(true);
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });
  const [textVisibility, setTextVisibility] = useState(false);
  const [infoText, setInfoText] = useState(incorrect);

  const handleInputChange = (e) => {
    const value = {
      ...formUser,
      [e.target.name]: removeWhitespace(e.target.value),
    };
    setFormUser(value);
  };

  const handletextVisibility = () => {
    setTextVisibility(true);
    setTimeout(() => setTextVisibility(false), 4000);
  };

  const handleStatus = (text) => {
    handletextVisibility();
    setInfoText(text);
  };

  const errorFunction = () => {
    setErrorBar({ visibility: true, text: app.error.server });
    setTimeout(() => setErrorBar({ visibility: false, text: '' }), 3000);
  };

  const checkDetailsStatus = (data) => {
    const {
      status,
      details: { age, height, weight },
    } = data;

    if (status === 1) {
      setDetailsInLocalStorage({ age, height, weight });
      setUserDetails((prevState) => ({
        ...prevState,
        data: { age, height, weight },
        bmi: calculateBMI(height, weight),
      }));
      setBMIInLocalStorage(calculateBMI(height, weight));
    } else if (status === 3) {
      errorFunction();
    }
  };

  const getDetailsData = (userId, token) =>
    getDataFromAPI(detailsRoute.userId, { userId }, checkDetailsStatus, errorFunction, token);

  const loginUser = (user, token) => {
    setUser({ ...user });
    setUserInLocalStorage(user);
    getDetailsData(user._id, token);
    setIsLogged(true);
    history.push(main);
  };

  const setUserToken = (token) => {
    setToken(token);
    setTokenInLocalStorage(token);
  };

  const checkStatus = (data) => {
    const { status, user, token } = data;

    if (status === 1) {
      setLoading(true);
      setUserToken(token);
      loginUser(user, token);
    } else if (status === 2 || status === 3) {
      handleStatus(incorrect);
    } else if (status === 4) {
      handleStatus(error);
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    getDataFromAPI(
      userRoute.login,
      {
        email: formUser.email,
        password: md5(formUser.password),
      },
      checkStatus,
      () => handleStatus(error),
    );
  };

  const setPasswordVisibility = () => setPasswordType(!passwordType);

  return (
    <>
      <Info isVisibility={textVisibility}>{infoText}</Info>
      <FormBox autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formUser.email}
          name={email.name}
          label={email.name}
          pattern={email.pattern}
          errorText={email.errorText}
        />
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={formUser.password}
          eyeOnClick={setPasswordVisibility}
          type={passwordType ? password.type : null}
          name={password.name}
          label={password.name}
          slash={passwordType}
          password
        />
        <FormButton>{loginButton}</FormButton>
      </FormBox>
    </>
  );
};

export default LoginForm;
