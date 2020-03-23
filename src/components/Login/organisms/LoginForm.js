import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import md5 from 'md5';
import { login } from 'data/value';
import { user as userRoute, details as detailsRoute } from 'data/api_routes';
import { setUserInLocalStorage, getDataFromApi, setDetailsInLocalStorage } from 'data/functions';
import { colorWithOpacity, lightGrey, red } from 'styled/colors';
import { useHistory } from 'react-router';
import { main } from 'data/routes';
import AppContext from 'context';
import Button from '../atoms/Button';
import FormInput from '../molecules/FormInput';

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
  margin-bottom: 10px;
  height: 20px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
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

  const { setUser, setUserIsLogged, setLoading, setDetails } = useContext(AppContext);
  const history = useHistory();

  const [passwordType, setPasswordType] = useState(true);
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });
  const [textIsVisible, setTextIsVisible] = useState(false);
  const [infoText, setInfoText] = useState(incorrect);

  const handleInputChange = (e) => {
    const value = {
      ...formUser,
      [e.target.name]: e.target.value,
    };
    setFormUser(value);
  };

  const handleTextIsVisible = () => {
    setTextIsVisible(true);
    setTimeout(() => setTextIsVisible(false), 2000);
  };

  const handleStatus = (text) => {
    handleTextIsVisible();
    setInfoText(text);
  };

  const checkDetailsStatus = (data) => {
    const {
      status,
      details: { age, height, weight },
    } = data;

    if (status === 1) {
      setDetails({ age, height, weight });
      setDetailsInLocalStorage({ age, height, weight });
    }
  };

  const getDetailsData = (userId) =>
    getDataFromApi(detailsRoute.userId, { userId }, checkDetailsStatus);

  const loginUser = (user) => {
    setUser({ ...user });
    setUserInLocalStorage(user);
    getDetailsData(user._id); // eslint-disable-line
    setUserIsLogged(true);
    history.push(main);
  };

  const checkStatus = (data) => {
    const { status, user } = data;

    if (status === 1) {
      setLoading(true);
      loginUser(user);
    } else if (status === 2 || status === 3) {
      handleStatus(incorrect);
    } else if (status === 4) {
      handleStatus(error);
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    getDataFromApi(
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
    <Wrapper>
      <Info isVisibility={textIsVisible}>{infoText}</Info>
      <FormBox autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
        <FormInput
          onChange={(e) => handleInputChange(e)}
          type={email.type}
          value={formUser.email}
          name={email.name}
          label={email.name}
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
    </Wrapper>
  );
};

export default LoginForm;
